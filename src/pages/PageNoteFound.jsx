import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function PageNoteFound() {
  return (
    <>
    <div style={{height:'70vh', width:'100%'}}className='d-flex align-items-center justify-content-center mt-5' >
        <img src="https://freefrontend.com/assets/img/html-funny-404-pages/SVG-Animation-404-Page.gif" alt="" />
       
    </div>
    <div className='d-flex align-items-center justify-content-center flex-column'> 
      <h1>Look's like you're lost</h1>
    <button  className='btn btn-primary '> <Link to='/' style={{textDecoration:'none', color:'white'}}> <FontAwesomeIcon icon={faArrowRight} flip className='me-1' /> back to home</Link> </button>
    </div>

    </>
  )
}

export default PageNoteFound
