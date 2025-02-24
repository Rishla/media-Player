import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <Navbar className="bg-info">
        <Container>
          <Navbar.Brand  className='text-white fs-5 fw-bold '>
         <Link to={"/"} style={{textDecoration:"none"}} className='text-white'>
              <i className="fa-solid fa-music"></i>&nbsp;
                Media Player
         </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header