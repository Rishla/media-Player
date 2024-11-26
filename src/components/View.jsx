import React, { useEffect, useState } from 'react'
 import VideoCard from "./VideoCard"
import {Col,Row } from 'react-bootstrap'
import { addVideo, getAllVideo, getSingleCategory, updateCategory } from '../service/allAPI'

function View({addVideoResponse,deleteVideoCategoryResponse,setDeleteVideoViewResponse}) {

  const [allVideos,setAllVideos]=useState([])
  const [deleteRespose,setDeleteResponse]=useState("")

  // inside useeffect we call the function get video
useEffect(() => {
  
  getVideo()
  

}, [addVideoResponse,deleteRespose,deleteVideoCategoryResponse])

console.log(allVideos);


// we create a function outside the useffect bcs we cant use async await directly inside use effect
const getVideo=async()=>{

  try{
    const result=await getAllVideo()
    // here the all datas are stored inside the data
    console.log(result.data);
    setAllVideos(result.data)
    
  }
  catch(err){
    console.log(err);
    
  }
  
}


// function for onDragOver(its an event btw the darg and drop)
const dragOverView=(e)=>{
  e.preventDefault()
}


// function for onDrop
const videoDroppedCategory=async(e)=>{

  const {videoDetails,CategoryId}=JSON.parse(e.dataTransfer.getData("dataShare"))
  console.log(videoDetails,CategoryId);

  // for getting the category details
  try {
    const {data}=await getSingleCategory(CategoryId)
    console.log(data);

    const updatedCategoryVideoList=data.allVideos.filter(item=>item.id!=videoDetails.id)
    console.log(updatedCategoryVideoList);

    const{id,categoryName}=data
    const categoryResult=await updateCategory(id,{id,categoryName,allVideos:updatedCategoryVideoList})
    setDeleteVideoViewResponse(categoryResult.data)
    
    await addVideo(videoDetails)
    getVideo()
    
    
  } catch (err) {
    console.log(err);
    
    
  }

}


  return (
    <>

   {
    // checking that is there any video to display
    allVideos.length>0 ?

     <Row droppable={true} onDragOver={(e)=>dragOverView(e)} onDrop={(e)=>videoDroppedCategory(e)} className="border border-3 p-3">
      {
        
// optional chaining operator(?)
        allVideos?.map(video=>(

              <Col key={video?.id} lg={4} md={6} sm={12}>

                  < VideoCard displayData={video} setDeleteResponse={setDeleteResponse}/>

              </Col>
        ))
      }

   </Row>

// if condition is no
   :
   <div className='text-danger fs-3 fw-bold'> Nothing to Display</div>
   }





    </>
  )
}

export default View