import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faSlash } from '@fortawesome/free-solid-svg-icons'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'
import { homeProjectApi } from '../services/allApi'
import Footer from '../components/Footer'
import { faSlack } from '@fortawesome/free-brands-svg-icons'
import Header from '../components/Header'

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

<div className='container-fluid' style={{ 
    height: '100vh', 
    backgroundColor: "#0e1746", 
    backgroundImage: `url('https://i.pinimg.com/originals/62/39/4d/62394d753859943e6a1a36443ef78795.gif')`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat' 
}}>
  <Row className=' d-flex align-items-center justify-content-center  p-5'>
    <Col xm={12} md={6} className='ps-5  ' style={{marginTop:"10%"}}>

      <h1 style={{color:"#66FCF1", fontSize:'100px'}}> <FontAwesomeIcon icon={faSlack}  className='me-3 ' style={{ color: '66FCF1' ,fontSize:'90px'}} />
      Project Vault</h1>
      <p style={{color:'#c5c6c7',fontSize:'20px'}}>Safeguard Your Projects, Display with Confidence.
      Your go-to platform for secure project management and seamless sharing.</p>
      { !isLogin ? 
        <Link to={'/login'} style={{color:"#c5c6c7"}}>
          <button className='btn btn-center' style={{color:"#66FCF1"}}>
            Get started 
            <FontAwesomeIcon icon={faArrowRight} style={{color:"#66FCF1"}}  className='ms-2' />
          </button>
        </Link> :
        <Link to={'/dashboard'}>
          <button className='btn btn-center' style={{color:"#c5c6c7", borderColor:"#66FCF1"}}>
            Manage projects 
            <FontAwesomeIcon icon={faArrowRight} style={{color:"#66FCF1"}}  className='ms-2' />
          </button>
        </Link>
      }
    </Col>
    {/* <Col xm={12} md={6}>
      <img src="https://cdn.dribbble.com/users/2585799/screenshots/6555657/__2_3_____.gif" alt="" className='w-75 ms-5' style={{marginTop:'100px'}} />
    </Col> */}
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
      <Footer/>

    </>
  )
}

export default Home

