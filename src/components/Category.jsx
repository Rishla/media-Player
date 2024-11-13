

import React, { useEffect } from 'react'
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { addCategory, getAllCategory } from '../service/allAPI'


function Category() {
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
  }, [])
  

  // add button
  const handleAddCategory=async()=>{
    if(categoryName){
      // api call
    try {
      await  addCategory({categoryName,allVideos:[]})
     handleClose()
     getCategory()
      
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


  return (
    <>
   <div className='container '>
      <div className="d-flex align-item-center">
        <h3 className='mainText text-warning'>All Categories</h3>
        <button  className='btn btn-warning fs-5 rounded-circle ms-3 fw-bolder' onClick={handleShow}>+</button>  
      </div>
   </div>

{
  allCategory.length>0?
  
  allCategory?.map(category=>(

  <div className='container-fluid mt-3'>
    <div className='border border-light border-3 rounded p-3 mb-3'>
      <div className='d-flex justify-content-between'>
        <h5>{category.categoryName}</h5>
        <button className='btn' ><i class="fa-solid fa-trash" style={{color:"red"}}></i></button>
      </div>
    </div>
   </div>

  ))
   :
   <div className='text-danger fs-3 fw-bold'> Category not added yet</div>
}

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