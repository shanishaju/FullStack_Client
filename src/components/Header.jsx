import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header({dash}) {
  return (
    <>
      <div>
      <Navbar className="bg-success">
        <Container>
       <Link to={'/'} className='text-decoration-none'> 
        <Navbar.Brand  className='text-light fs-3'>
           <FontAwesomeIcon icon={faStackOverflow}     className='me-3 fs-2' />

            Project Fair
          </Navbar.Brand>

          </Link> 
  {  dash && <button className='btn btn-warning'><FontAwesomeIcon icon={faPowerOff} style={{color: "#ffffff",}} className='me-2' />Logout</button>
  }     </Container>
      </Navbar>
      </div>
    </>
  )
}

export default Header
