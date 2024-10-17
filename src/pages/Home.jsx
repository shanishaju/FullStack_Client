import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'
import { homeProjectApi } from '../services/allApi'

function Home() {
  const [isLogin , setIsLogin] = useState(false)
  const [homeProject, setHomeProject] = useState([])


const getHomeProject =async()=>{
  const result = await homeProjectApi()
  setHomeProject(result.data);
  console.log(result.data);

}
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setIsLogin(true)
    }
    else{
      setIsLogin(true)
    }
    getHomeProject()

  },[])

  return (
    <>
      <div className='container-fluid ' style={{height:'100vh', backgroundColor:"#0B0C10" }}>
          <Row className='align-items-center'>
            <Col xm={12} md={6} className='ps-5'>
            <h1 style={{color:"#66FCF1", fontSize:'70px'}}>ProjectVault</h1>
            <p style={{color:'#c5c6c7'}}>Shining a light on your coding brilliance.</p>
            { !isLogin? <Link to={'/login'} style={{color:"#c5c6c7"}}><button className='btn ' style={{color:"#66FCF1"}}> Get started<FontAwesomeIcon icon={faArrowRight} style={{color:"#66FCF1"}} bounce className='ms-2' /></button>
            </Link> :
             <Link to={'/dashboard'}><button className='btn' style={{color:"#c5c6c7", borderColor:"#66FCF1"}}>Manage projects<FontAwesomeIcon icon={faArrowRight} style={{color:"#66FCF1"}} bounce className='ms-2' /></button>

             </Link>}

            </Col>
            <Col xm={12} md={6}>
            <img src="https://projectfair-ts-frontend.vercel.app/assets/designer-CuSJ9Yh0.svg" alt=""  className='w-75 ' style={{marginTop:'100px'}}/>
            </Col>
         
          </Row>
      </div>
      <div className='container-fluid' style={{height:"100vh",backgroundColor:"#0B0C10"}}>
        <h1 className=' text-center pt-5' style={{color:"#66FCF1"}}>See What We've Built
        </h1>
        <div className="row">
         {homeProject?.length>0? 
         homeProject?.map((item)=>(
          <div className="col-md-4 p-4">
            <ProjectCard projects={item}/>
          </div>
         ))
         :null}

        </div>
        <Link to={'/project'}><h5 className='text-center mt-5 '>Browse More</h5></Link>
      </div>
    </>
  )
}

export default Home

