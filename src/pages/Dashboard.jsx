import React from 'react'
import Header from '../components/Header'
import Profile from '../components/Profile'

import { Col, Row } from 'react-bootstrap'
import MyProjects from '../components/MyProjects'

import Footer from '../components/Footer'
import { useEffect, useState } from 'react'




function Dashboard() {
  const [user, setUser] = useState("")
  //for displayig username on dashboard
  useEffect(() => {
    if (sessionStorage.getItem("exsistingUser")) {
      setUser(JSON.parse(sessionStorage.getItem("exsistingUser")).username);
    }
    

  }, []);
  return (

    <>
      <Header dash={true} />
      <h4 className='mt-4 ms-3' >Welcome <span className='text-success'> {user}</span></h4>
      <div>
        <Row className='mt-5 container-fluid p-5'>
          <Col md={8} sm={12} xs={12}>
            <MyProjects />
          </Col>
          <Col md={4} sm={12} xs={12}>
            <Profile />

          </Col>
        </Row>
      </div>
      <Footer />
    </>
  )
}

export default Dashboard
