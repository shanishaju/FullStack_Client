import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function PageNoteFound() {
  return (
    <>
      <div style={{ width: '100%' }} className='d-flex align-items-center justify-content-center mt-5'>
        <img
          src="https://freefrontend.com/assets/img/html-funny-404-pages/SVG-Animation-404-Page.gif"
          alt=""
          style={{ height: '500px' }} // Adjust the height as needed
        />
      </div>
      <div className='d-flex align-items-center justify-content-center flex-column mt-5'>
        <h1 style={{ color: "#0e1746" }}>Look's like you're lost</h1>
        <button className='btn' style={{ color: "#0e1746", backgroundColor: "#0e1746" }}>
          <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
            <FontAwesomeIcon icon={faArrowRight} flip className='me-1' /> back to home
          </Link>
        </button>
      </div>
    </>
  )
}

export default PageNoteFound
