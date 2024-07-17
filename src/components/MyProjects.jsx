import React from 'react'
import AddProject from '../components/AddProject'
import EditProject from './EditProject'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


function MyProjects() {
  return (
    < >
      <div className='shadow px-3 py-4 rounded'>
    <div className='d-flex justify-content-between'>
    <h5 className='text-success '>My Project</h5>
    <AddProject/>
    </div>
    <div className='mt-4 p-3 bg-light d-flex justify-content-between'>
      <h5>Media Player</h5>


      <div className="d-flex">
        <EditProject/>
        <FontAwesomeIcon icon={faGlobe}  className='text-warning ms-3'/>
        <FontAwesomeIcon icon={faGithub} className='text-success ms-3' />
        <FontAwesomeIcon icon={faTrash} className='text-danger ms-3'/>
      </div>
    

    </div>
    </div>
    </>
  )
}

export default MyProjects

