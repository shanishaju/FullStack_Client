import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglass, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import ProjectCard from '../components/ProjectCard'

function Project() {
  return (
    <>
    <Header/>
     <h1 className='text-center mt-5 '>All Projects</h1>
     <div className="row mt-5 w-100">
      <div className="col-md-4"></div>
      <div className="col-md-4 d-flex">
        <input type="text" placeholder='technologies' className='form-control ' />
        <FontAwesomeIcon icon={faMagnifyingGlass}  style={{ marginTop:'10', marginRight:'-30px'}} flip='horizontal'/>
      </div>
      <div className="col-md-4"></div>
     </div>
     <div className='container-fluid'>
      <div className="row">
        <div className="col-md-4">
          <ProjectCard/>
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-4"></div>
      </div>

     </div>
     <p className='text-center text-danger mt-5 fs-3'>No projects to diplay <FontAwesomeIcon icon={faHourglass} spin style={{color: "#ff0000",}} className='ms-2' /></p>
    <Footer/>
    </>
  )
}

export default Project
