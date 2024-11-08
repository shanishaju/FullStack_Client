import { faSlack, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { faArrowLeft, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { loginApi, registerApi } from '../services/allApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// taking data from input box for sending to backend -- after done the backend
function Auth({ register }) {

  // giving path after signing up
  const navigate = useNavigate()


  // usestate for getting the input content
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: ""
  });
  console.log(userDetails);

  //after creating apis
  const handlleRegister = async () => {

    const { username, email, password } = userDetails

    if (!username || !email || !password) {
      toast.info('please fill the form completely')
    }
    else {
      const response = await registerApi(userDetails)

      if (response.status == 200) {
        toast.success('Registration successfully')
        navigate('/login')
      }
      else {
        toast.error('something went wrong.Please after sometimes')
      }
    }
  }
  //login button api call
  const handleLogin = async () => {
    const { email, password } = userDetails
    //checking input boxes were filled
    if (!email || !password) {
      toast.info("please fill the form completely")
    }
    else {
      //call the login api
      const response = await loginApi({ email, password })
      // console.log(response);
      if (response.status == 200) {
        toast.success("login successful")

        sessionStorage.setItem("exsistingUser", JSON.stringify(response.data.exsistingUser))
        sessionStorage.setItem("token", response.data.token)
        setUserDetails({
          username: "",
          email: "",
          password: ""
        })
        setTimeout(() => {
          navigate('/')
        }, 2000)

      }
      else {
        toast.error("email or password doesn't match. Please try again.")
      }
      console.log(response);

    }
  }
  return (

    <>
      <div className='container-fluid d-flex justify-content-center align-items-center flex-column ' style={{ height: '100vh', backgroundColor: "#0e1746" }}>
        <Link to={'/'} className='text-decoration-none text-start '><h5 className=' container mt-5 text-start ' style={{ color: "#66FCF1" }}> <FontAwesomeIcon icon={faHome} beat className='me-2' />Back to home</h5>
        </Link>
        <div className='container w-100  mt-3 rounded' >
          <Row>
            <Col md={6} sm={12} className='p-5 d-flex justify-content-center align-items-center border border-success mb-sm-5 mb-md-0' style={{
                borderTopLeftRadius: '50%', borderBottomLeftRadius: '50%'

            }} >
              {/* <img src="https://icon-library.com/images/admin-login-icon/admin-login-icon-20.jpg" alt="" className='w-75'
              /> */}
              <img src="https://ashakirangroup.net/web_assets/img/giflogin.gif" alt="" className='w-100'
              />
            </Col>
            <Col md={6} sm={12} className='d-flex justify-content-center align-items-center text-light flex-column border border-success' style={{
                borderTopRightRadius: '50%', borderBottomRightRadius: '50%'

            }}>
              <h3 className='mb-3 pt-sm-2' style={{ color: "#66FCF1" }}>  <FontAwesomeIcon icon={faSlack} className='me-1 ' />

              </h3>
              {register ? <h5>Sign up to your Account</h5> :
                <h5>Sign in to your Account</h5>
              }
              <form className='mt-4 w-50'>

                {register && <div className="mb-3">
                  <input type="text" placeholder='username' className='w-100 p-2 ' onChange={(e) =>
                    setUserDetails({ ...userDetails, username: e.target.value })
                  } />
                </div>}
                <div className="mb-3">
                  <input type="text" placeholder='email' className='w-100 p-2' onChange={(e) =>
                    setUserDetails({ ...userDetails, email: e.target.value })} />

                </div>
                <div className="mb-3">
                  <input type="text" placeholder='password' className='w-100 p-2' onChange={(e) =>
                    setUserDetails({ ...userDetails, password: e.target.value })
                  } />

                </div>
                <div className="mb-3">
                  {register ? <div>
                    <button type='button' className='btn  w-100' onClick={handlleRegister}  style={{backgroundColor:"#66FCF1"}}> Register</button>
                    <p className='mt-3'>Already User? Login <Link to={'/login'} className='' style={{color:"#66FCF1"}}>here</Link></p>

                  </div> :
                    <div>
                      <button type='button' className='btn  w-100  ' style={{backgroundColor:"#66FCF1"}} onClick={handleLogin}>  Login</button>
                      <p className='mt-3'>New user ragister <Link to={'/register'} className='' style={{color:"#66FCF1"}}>here</Link></p>

                    </div>}
                </div>
              </form>

            </Col>
          </Row>

        </div>
        <ToastContainer theme='colored' position='top-center' autoClose='2000' />
      </div>
    </>
  )
}

export default Auth
