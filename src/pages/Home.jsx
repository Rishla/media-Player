import React, { useState } from 'react'
import Add from '../components/Add'
import View from '../components/View'
import Category from '../components/Category'
import { Link } from 'react-router-dom'


function Home() {

  const [addVideoResponse,setAddVideoResponse]=useState("")


  return (
    <>
    <div className='container m-5 d-flex justify-content-between'>
      <Add setAddVideoResponse ={setAddVideoResponse} />
      <Link to={"/history"} className='text-warning fw-bold fs-5' style={{textDecoration:"none"}}>Watch History</Link>
    </div>

     <div className='row m-5'>
      <div className='col-lg-6'>
        <h3 className='text-info'>All Videos</h3>
        < View addVideoResponse={addVideoResponse} />
      </div>

      <div className='col-lg-6'>
        < Category />
      </div>
    </div> 

    </>
  )
}

export default Home