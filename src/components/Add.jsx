import React from 'react'
// modal
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
// floating label for inside the modal
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
// react toastify(for styling the alert)


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
// addvideo api call 
import { addVideo } from "../service/allAPI"


function Add({setAddVideoResponse}) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [videoDetails,setVideoDetails]=useState({caption:"",imageUrl:"",youtubeurl:""})
  console.log(videoDetails);

// State for error message
  const [error, setError] = useState(""); // State for error message

  // for getting embeded url
  const getEmbedUrl=(link)=>{

    setError(""); // Clear previous error message

    // used to convert url to embeded url
    if(link.includes("v=")){
      let videoId=link.split("v=")[1].slice(0,11)
      setVideoDetails({...videoDetails,youtubeurl:`https://www.youtube.com/embed/${videoId}`})
      console.log(videoId);
    }
    else{
      setVideoDetails({...videoDetails,youtubeurl:""})
      setError("Please enter a valid YouTube URL"); // Set error message if invalid
    }


  }
  

  // modal 
  


  // upload button api calling(used to store the data in json)
  const  handleUpload=async()=>{
    // deconsturcter
    const{caption,imageUrl,youtubeurl}=videoDetails
    // checking that the fields are filled
    if(caption && imageUrl && youtubeurl){

      try{
        const result=await addVideo(videoDetails)
          setAddVideoResponse(result.data)
        console.log(result);
        if(result.status>=200 && result.status<300){
          toast.success(`${result.data.caption} added to your collection`)
          handleClose()
        }
        
      }
      catch(err){
        console.log(err);
        
      }

      
    }
    else{
      // alert("please enter the feild properly")
      // here we use warning. we can use success,error according to our concern
      toast.warning("Enter the field completely")
    }

  }

  return (
    <>

<div className="d-flex align-items-center">
  <h5 className='text-warning'>Upload New Videos</h5>
  <button onClick={handleShow} className='btn btn-warning fs-5 rounded-circle ms-3 fw-bolder'>+</button>
</div>



<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>

          <div className='border border-3 border-info rounded p-3'>

          {/* caption */}
          <FloatingLabel controlId="floatingInputcaption" label="Video Caption"className="mb-3"  >
            <Form.Control onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="enter a video caption" />
         </FloatingLabel>

         {/* image url */}

         <FloatingLabel controlId="floatingInputimage" label="Image Url"className="mb-3"  >
            <Form.Control onChange={e=>setVideoDetails({...videoDetails,imageUrl:e.target.value})} type="text" placeholder="enter image url" />
         </FloatingLabel>

         {/* youtube url */}

         <FloatingLabel controlId="floatingInputurl" label="Youtube Url"className="mb-3"  >
            <Form.Control onChange={e=>getEmbedUrl(e.target.value)}  type="text" placeholder="enter youtube url" />
         </FloatingLabel>

          {/* Error message for invalid URL */}
          {error && <p style={{ color: "red" }}>{error}</p>}


          </div>
          



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info"  onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>


{/* react toastify */}
{/* <ToastContainer position="top-right" autoClose={3000} theme="colored"/> */}



    </>
  )
}

export default Add

