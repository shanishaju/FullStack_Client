import React from 'react'
import Header from '../components/Header'
import Profile from '../components/Profile'

import { Col, Row } from 'react-bootstrap'
import MyProjects from '../components/MyProjects'
import Footer from '../components/Footer'

function Dashboard() {
  return (
    <>
      <Header dash={true}/>
      <h4 className='mt-4 ms-3' >Welcome <span className='text-danger'>Name</span></h4>
      <div>
        <Row className='mt-5 container-fluid p-5'>
         <Col md={8} sm={12}> 
         <MyProjects/>
         </Col>
         <Col md={4} sm={12}>
         <Profile/>
         
         </Col>
        </Row>
      </div>
      <Footer/>
    </>
  )
}

export default Dashboard
