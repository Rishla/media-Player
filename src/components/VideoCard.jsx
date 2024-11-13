import React from 'react'
// cards
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteVideo, savehHistory } from '../service/allAPI';



function VideoCard({displayData,setDeleteResponse}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);


  const handleShow =async () => {

    const{caption,youtubeurl}=displayData
    const localTime=new Date()
    console.log(localTime);
    const formatedDate = localTime.toLocaleString()
    const videoHistory={caption,youtubeurl,formatedDate}
    
    try {

      await savehHistory(videoHistory)
      
    } catch (err) {
      console.log(err);
      
      
    }
    




  
    setShow(true)


  };



  const handleRemoveVideo=async(videoId)=>{
    try {
      const result=await deleteVideo(videoId)
      console.log(result);
      setDeleteResponse(result.data)
      
    } catch (err) {
      console.log(err);
      
      
    }

  }

  return (
    <>
     <Card className='mb-4' >
      <Card.Img onClick={handleShow}  style={{height:"180px"}} variant="top" src={displayData.imageUrl} />
      <Card.Body className='d-flex align-items-center justify-content-between '>

        <h5>{displayData.caption}</h5>
        <button onClick={()=>handleRemoveVideo(displayData?.id)} className='btn'> <i class="fa-solid fa-trash" style={{color:"red"}}></i></button>
        

      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{displayData.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="480" src={`${displayData.youtubeurl}?autoplay=1`} title="Illuminati|Aavesham|Jithu Madhavan|Fahadh Faasil|Sushin Shyam,Dabzee,Vinayak| Nazriya|Anwar Rasheed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Modal.Body>
        
      </Modal>

    
    
    
    
    </>
  )
}

export default VideoCard