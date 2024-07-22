import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'

function Home() {
  const [isLogin , setIsLogin] = useState(false)
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setIsLogin(true)
    }
    else{
      setIsLogin(true)
    }

  },[])
  return (
    <>
      <div className='container-fluid bg-success' style={{height:'100vh' }}>
          <Row className='align-items-center'>
            <Col xm={12} md={6} className='ps-5'>
            <h1 style={{color:'white', fontSize:'70px'}}>Project Fair</h1>
            <p style={{color:'black'}}>One stop destination for all software development projects</p>
            { !isLogin? <Link to={'/login'}>             <button className='btn text-light'> Get started<FontAwesomeIcon icon={faArrowRight} bounce className='ms-2' /></button>
            </Link> :
             <Link to={'/dashboard'}><button className='btn text-light '>Manage projects<FontAwesomeIcon icon={faArrowRight} bounce className='ms-2' /></button>

             </Link>}

            </Col>
            <Col xm={12} md={6}>
            <img src="https://projectfair-ts-frontend.vercel.app/assets/designer-CuSJ9Yh0.svg" alt=""  className='w-75 ' style={{marginTop:'100px'}}/>
            </Col>
         
          </Row>
      </div>
      <div className='container-fluid' style={{height:"100vh"}}>
        <h1 className=' text-center mt-5'>Explore our projects</h1>
        <div className="row">
          <div className="col-md-4 p-4">
            <ProjectCard/>
          </div>
          <div className="col-md-4 p-4">
            <ProjectCard/>
          </div>          <div className="col-md-4 p-4">
            <ProjectCard/>
          </div>
        </div>
        <Link to={'/project'}><h5 className='text-center mt-5 '>See more projects</h5></Link>
      </div>
    </>
  )
}

export default Home

