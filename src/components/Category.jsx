

import React, { useEffect } from 'react'
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// api call
import { addCategory, deleteCategory, deleteVideo, getAllCategory, getSingleVideo, updateCategory } from '../service/allAPI'
// import videocard
import VideoCard from "./VideoCard"





function Category({setDeleteVideoCategoryResponse,deleteVideoViewResponse}) {
  const [show, setShow] = useState(false);
  // state for store user entering data

  const [categoryName,setCategoryName]=useState("")

  const[allCategory,setAllCategory]=useState([])

  console.log(categoryName);
  console.log(allCategory);
  
  


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {

  getCategory()
  }, [deleteVideoViewResponse]) 
  

  // add button
  const handleAddCategory=async()=>{
    if(categoryName){
      // api call
    try {
      await  addCategory({categoryName,allVideos:[]})
     handleClose()
     getCategory()
     setCategoryName()
      
    } 
    catch (err) {
      console.log(err);
      
    }
    }
    else{
      toast.warning("Enter category name")

    }
  }

// get category
  const getCategory=async()=>{
    try {
      const result= await getAllCategory()
      setAllCategory(result.data)
      
    } catch (err) {
      console.log(err);
      
    }

  }

  // delete category
const delCategory=async(categoryId)=>{
  try {

    await deleteCategory(categoryId)
    // this is called that we want to delete imediatly without refreshing
    getCategory()

    deleteVideo(videoId)
    
  } catch (err) {
    console.log(err);
    
    
  }
}

// function for onDrop
const videoDropped=async(e,categoryId)=>{
  console.log(`video dropped in category with id ${categoryId}`);
 const videoId =e.dataTransfer.getData("videoId")
 console.log(`dragged video with id ${videoId} and dropped in category with id ${categoryId}`);
 
 try {
  const {data}=await getSingleVideo(videoId)
  console.log(data);

  const selectedCategory =allCategory.find(item => item.id == categoryId)
  selectedCategory.allVideos.push(data)
  console.log(selectedCategory);

  // Call updateCategory API with the modified selectedCategory
  await updateCategory(categoryId, selectedCategory);
  // Refresh category data to reflect changes on the UI
   getCategory()

  const result= await  deleteVideo(videoId)
   setDeleteVideoCategoryResponse(result.data)

  
  
  
 } catch (err) {
  console.log(err);
  
  
 }

  
}

// function for onDragOver(its an event btw the darg and drop)
const dragOverCategory=(e)=>{
  e.preventDefault()
}

// function for dragStarted
const dragStarted=(e,videoDetails,CategoryId)=>{
  console.log(videoDetails);
  
  console.log(`dragging started at category with video:${videoDetails} and category id :${CategoryId}`);
  const dataShare={videoDetails,CategoryId}
  e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))
}




  return (
    <>
   <div className='container '>
      <div className="d-flex align-item-center">
        <h3 className='mainText text-warning'>All Categories</h3>
        <button  className='btn btn-warning fs-5 rounded-circle ms-3 fw-bolder' onClick={handleShow}>+</button>  
      </div>
   </div>

   <div className='container-fluid mt-3'>

{
  allCategory.length>0?
  
  allCategory?.map(category=>(

    <div droppable={true} onDragOver={(e)=>dragOverCategory(e)} onDrop={(e)=>videoDropped(e,category.id)} className='border border-light border-3 rounded p-3 mb-3'>
      <div className='d-flex justify-content-between'>
        <h5>{category.categoryName}</h5>
        <button className='btn' onClick={()=>delCategory(category.id)} ><i class="fa-solid fa-trash" style={{color:"red"}}></i></button>
      </div>

      <div className='row mt-3'>
       {
        category.allVideos.length>0 &&

        category.allVideos?.map(video=>(

          <div draggable={true} onDragStart={(e)=>dragStarted(e,video,category.id)} className='col-lg-6'>

          <VideoCard displayData={video} insideCategory={true}/>

      
        </div>

        ))
         
       }
      </div>

    </div>

  ))
   :
   <div className='text-danger fs-3 fw-bold'> Category not added yet</div>
}

</div>
   <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
                  <Modal.Header closeButton>
                    <Modal.Title className='text-warning'>Category Details</Modal.Title>
                </Modal.Header>
                   <Modal.Body>
          {/* form ctrl */}
                      <div className='p-3 border border-3 border-info rounded'>
                         <FloatingLabel    controlId="categoryName"     label="category"  >
                          <Form.Control onChange={(e)=>setCategoryName(e.target.value)} type="text" placeholder="category" />
                         </FloatingLabel>
                       </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}> Cancel</Button>
                      <Button onClick={handleAddCategory} variant="info">Add</Button>
                 </Modal.Footer>
              </Modal>
   <ToastContainer position="top-right" autoClose={3000} theme='colored'/> 
    </>
  )
}

export default Category