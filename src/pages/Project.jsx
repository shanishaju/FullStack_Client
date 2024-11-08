import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglass, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'
import { allProjectApi } from '../services/allApi'
function Project() {
  const [istoken, setIsToken] = useState("")
  const [allProjects, setAllProjects] = useState([])
  const [searchKey, setSearchKey] = useState("")



  const getAllProject = async () => {

    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await allProjectApi(searchKey, reqHeader)
      if (result.status == 200) {
        setAllProjects(result.data);
      }
    }
  }
  console.log(allProjects);


  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setIsToken(sessionStorage.getItem("token"))
    }
  }, [])

  useEffect(() => {
    getAllProject()
  }, [searchKey])
  console.log(searchKey);
  return (
    <>
      <Header />
      <div  style={{ backgroundColor: "black" }}>
        {/* <h1 className='text-center pt-5 ' style={{color:"#66FCF1"}} >All Projects</h1> */}
        {istoken ? <div >
          <div className="row pt-5 w-100" >
            <div className="col-md-4"></div>
            <div className="col-md-4 d-flex">
              <input type="text" placeholder='technologies' className='form-control ' onChange={(e) => setSearchKey(e.target.value)} />
              <FontAwesomeIcon icon={faMagnifyingGlass} style={{ marginTop: '10', marginRight: '-30px' }} flip='horizontal' />
            </div>
            <div className="col-md-4"></div>
          </div>
          {allProjects?.length > 0 ? <div className='container-fluid mt-5 pb-5'>
            <div className="row">
              {allProjects?.map((item) => (
                <div className="col-md-4">
                  <ProjectCard projects={item} />
                </div>
              ))}
              <div className="col-md-4"></div>
              <div className="col-md-4"></div>
            </div>

          </div>
            :
            <p className='text-center text-danger mt-5 fs-3'>No projects to diplay <FontAwesomeIcon icon={faHourglass} spin style={{ color: "#ff0000", }} className='ms-2' /></p>
          }
        </div>

          : <div className='row w-100' >
            <div className='col-md-2'></div>
            <div className='col-md-8'>
              
              <img src="https://cdn.dribbble.com/users/1556167/screenshots/5640970/media/857a6fd723900b22b0265ebc2b349681.gif" alt="" width={"100%"} height={'60%'} />
              <h4 className='mt-4 text-center' style={{color:"#66FCF1"}}>Please <span className='p-1'><Link to={'/login'} style={{ color: 'red' }}> Login</Link></span> to view projects</h4>
            </div>
            <div className='col-md-2'></div>
          </div>}
      </div>
      <Footer />
    </>
  )
}

export default Project
