import React from 'react'
import { Link } from 'react-router-dom'
import LandingImage from '../assets/gif.gif'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import settings from '../assets/setting.jpg'
import category from "../assets/category.jpeg"
import hist from"../assets/hist.jpeg"





function Landing() {
  return (
    <>
     {/* landing section */}
    <div className='container landingsection'>
      <div className='row align-items-center my-5'>
        <div className='col-lg-5'>
          <h3 >Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{textAlign:"justify"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repellendus omnis eaque, expedita voluptates alias illo perspiciatis necessitatibus. Inventore, eveniet corrupti? Quisquam autem dolorum blanditiis doloribus beatae deleniti vero hic!</p>
          <Link to={"/home"} className="btn btn-info mt-4">Get Started</Link>

        </div>
        <div className='col'></div>
        <div className='col-lg-6'>
          <img src={LandingImage} alt="" />
        </div>

      </div>

    </div>

    {/* features */}
    <div className='container my-5'>
      <h1 className='text-center text-warning'>Features </h1>
      <div className='row'>
        <div className='col-lg-4'>
          {/* card */}
        <Card style={{ width: '20rem' }} className='p-3'>
      <Card.Img variant="top" src={settings} />
      <Card.Body>
        <Card.Title>Managing Video</Card.Title>
        <Card.Text>
          User can upload, view and remove the video
        </Card.Text>
      </Card.Body>
    </Card>

        </div>




        <div className='col-lg-4'>
          {/* card */}
        <Card style={{ width: '20rem' }} className='p-3'>
      <Card.Img variant="top" src={category} />
      <Card.Body>
        <Card.Title>Catagorize Videos</Card.Title>
        <Card.Text>
        Users can categorize the video by drag and drop feature
        </Card.Text>
      </Card.Body>
    </Card>

        </div>



        <div className='col-lg-4'>
          {/* card */}
        <Card style={{ width: '20rem' }} className='p-3'>
      <Card.Img variant="top" src={hist} />
      <Card.Body>
        <Card.Title>Managing History</Card.Title>
        <Card.Text>
        Users can manage the watch history of all video
        </Card.Text>
      </Card.Body>
    </Card>

        </div>



      </div>

    </div>

    {/* 3rd section */}

    <div className='container my-5 p-5 border border-white border-3 rounded'>
    <div className='row'>
      <div className='col-lg-6'>
        <h3 className='text-warning'> Simple,Fast and Powerful</h3>
        <div className='mt-5 text-white'>
          {/* <p><span className='fs-5 fw-bold '> </span></p> */}
          <p ><span className='fs-5 fw-bold '>Play Evering:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum a quidem, assumenda reiciendis incidunt alias consequuntur non dolorem deleniti repellat, maxime odit aperiam, numquam modi eligendi.</p>
         <p><span className='fs-5 fw-bold '>Categorize video</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum a quidem, assumenda reiciendis incidunt alias consequuntur non dolorem deleniti repellat, maxime odit aperiam, numquam modi eligendi. Similique sit perspiciatis aperiam.</p>
         <p><span className='fs-5 fw-bold '> Managing History:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum a quidem, assumenda reiciendis incidunt alias consequuntur non dolorem deleniti repellat, maxime odit aperiam, numquam modi eligendi. Similique sit perspiciatis aperiam.</p>
        </div>

       

      </div>
      <div className='col-lg-6 p-5'>
        <iframe width="450" height="350" src="https://www.youtube.com/embed/nYEoxne_20Y" title="Neela Nilave - Video Song | RDX | Kapil Kapilan | Sam CS | Shane Nigam,Antony Varghese,Neeraj Madhav" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

    </div>

   </div> 



    </>
   
   
  )
}

export default Landing