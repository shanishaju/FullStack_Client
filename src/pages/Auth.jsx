import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { loginApi, registerApi } from '../services/allApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






// taking data from input box for sending to backend -- after done the backend
function Auth({register}) {

    // giving path after signing up
    const navigate = useNavigate()


  // usestate for getting the input content
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
    toast.info('please fill the form completely')
  }
  else{
    const result = await registerApi(userDetails)
    
    console.log(result);
    if(result.status==200){
      toast.success('Registration successfully')
      navigate('/login')
    }
    else{
      toast.error('something went wrong.Please after sometimes')
    }
  }

}

const handleLogin = async()=>{
  const{email, password} = userDetails
  if(!email || !password){
    toast.info("please fill the form completely")
  }
  else{
    const result = await loginApi({email,password})
    console.log(result);
    if(result.status==200){
      toast.success("login successful")
      sessionStorage.setItem('existingUser',JSON.stringify
        (result.data.existingUser))
        sessionStorage.setItem("token"),
        setUserDetails({
          username:"",
          email:"",
          password:""
        })
        setTimeout(()=>{
        navigate('/')
      },2000)

    }
    else{
      toast.error(result.response.data)
    }
    console.log(response);

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
                <button type='button' className='btn btn-warning w-100' onClick={handlleRegister} > Register</button>
                <p className='mt-3'>Already User? Login <Link to={'/login'} className='text-warning'>here</Link></p>
                
                  </div>:
                  <div>
                  <button type='button' className='btn btn-warning w-100  '  onClick={handleLogin}>  Login</button>
                <p className='mt-3'>New user ragister <Link to={'/register'} className='text-warning'>here</Link></p>
              
                  </div>}
                  </div>
              </form>

            </Col>
          </Row>
          
        </div>
        <ToastContainer theme='colored' position='top-center' autoClose = '2000'/>
       </div>      
    </>
  )
}

export default Auth
