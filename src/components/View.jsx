import React, { useEffect, useState } from 'react'
 import VideoCard from "./VideoCard"
import {Col,Row } from 'react-bootstrap'
import { getAllVideo } from '../service/allAPI'

function View(addVideoResponse) {

  const [allVideos,setAllVideos]=useState([])
  const [deleteRespose,setDeleteResponse]=useState("")

  // inside useeffect we call the function get video
useEffect(() => {
  
  getVideo()
  

}, [addVideoResponse,deleteRespose])

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

  return (
    <>

   {
    // checking that is there any video to display
    allVideos.length>0 ?

     <Row className="border border-3 p-3">
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