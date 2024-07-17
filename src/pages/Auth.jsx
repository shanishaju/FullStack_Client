import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { registerApi } from '../services/allApi'




// taking data from input box for sending to backend -- after done the backend
function Auth({register}) {
      const [userDetails , setUserDetails] = useState({
        username:"",
        email:"",
        password:""
      })
      console.log(userDetails);

      //after creating apis
const handlleRegister = async()=>{
   
  const {username , email , password} = userDetails
   
  if (!username || !email || !password){
    alert('please fill the form completely')
  }
  else{
    const result = await registerApi(userDetails)
    console.log(result);
  }

}
  return (

    <>
      <div className='container-fluid d-flex justify-content-center align-items-center flex-column' style={{height:'100vh'}}>
        <Link to={'/'} className='text-decoration-none'><h5 className='text-danger container mt-5'> <FontAwesomeIcon icon={faArrowLeft} beat className='me-2' />Back to home</h5>
        </Link>
       <div className='container w-75 bg-success mt-3 rounded' >
          <Row>
            <Col md={6} sm={12} className='p-5 d-flex justify-content-center align-items-center' >
             <img src="https://icon-library.com/images/admin-login-icon/admin-login-icon-20.jpg" alt=""  className='w-75'
             />
            </Col>
            <Col md={6} sm={12} className='d-flex justify-content-center align-items-center text-light flex-column'>
              <h3 className='mb-3'>  <FontAwesomeIcon icon={faStackOverflow}     className='me-3 '/> project Fiar 
              </h3>
              { register ? <h5>Sign up to your Account</h5>:
              <h5>Sign in to your Account</h5>
}
              <form  className='mt-4 w-50'>
              
              { register && <div className="mb-3">
                <input type="text" placeholder='username' className='form-control ' onChange={(e)=> 
                  setUserDetails({...userDetails, username:e.target.value})
                } />
              </div>}
              <div className="mb-3">
              <input type="text" placeholder='email' className='form-control' onChange={(e)=> 
                  setUserDetails({...userDetails, email:e.target.value})}  />

              </div>
              <div className="mb-3">
              <input type="text" placeholder='password' className='form-control'  onChange={(e)=> 
                  setUserDetails({...userDetails, password:e.target.value})
                }  />

              </div>
              <div className="mb-3"> 
                { register? <div>
                <button className='btn btn-warning w-100' onClick={handlleRegister} > Register</button>
                <p className='mt-3'>Already User? Login <Link to={'/login'} className='text-warning'>here</Link></p>
                
                  </div>:
                  <div>
                  <button className='btn btn-warning w-100 '> Login</button>
                <p className='mt-3'>New user ragister <Link to={'/register'} className='text-warning'>here</Link></p>
              
                  </div>}
                  </div>
              </form>

            </Col>
          </Row>
          
        </div>

       </div>      
    </>
  )
}

export default Auth
