import React, { useEffect, useState } from 'react'
import AddProject from '../components/AddProject'
import EditProject from './EditProject'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { userProjectApi } from '../services/allApi'


function MyProjects() {
const[userProject, setUserProject]= useState([])
  const getUserProject = async()=>{
      if(sessionStorage.getItem("token")){
       const token = sessionStorage.getItem("token")
       const reqHeader ={
         "Content-Type":"application/json",
         "Authorization":`Bearer ${token}`
        }
        const result =await userProjectApi(reqHeader)
      setUserProject(result.data);       
 }
}
console.log(userProject);
useEffect(()=>{
getUserProject()
},[])
  return (
    < >
      <div className='shadow px-3 py-4 rounded'>
    <div className='d-flex justify-content-between'>
    <h5 className='text-success  '>My Project</h5>
    <AddProject/>
    </div>
{ userProject?.length>0?
userProject?.map((item)=>(

   <div className='mt-4 p-3 bg-light d-flex justify-content-between'>
      <h5>{item.title}</h5>


      <div className="d-flex">
        <EditProject/>
        <FontAwesomeIcon icon={faGlobe}  className='text-warning ms-3'/>
        <FontAwesomeIcon icon={faGithub} className='text-success ms-3' />
        <FontAwesomeIcon icon={faTrash} className='text-danger ms-3'/>
      </div>
    

    </div>
    ))
    : <p className='text-danger'>no projects to display</p>
    }
    </div>
    </>
  )
}

export default MyProjects

