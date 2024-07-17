import { faFacebook, faInstagram, faLinkedin, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {

  return (

  <div className='row w-100 mt-5 p-3 bg-success'>
        <div className="col-md-4 p-4 ms-md-5">
            <h4 className='text-light'> <FontAwesomeIcon icon={faStackOverflow} bounce className='me-3 fs-2' />Project Fair</h4>
            <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dignissimos provident minima id nisi ut eaque tenetur corrupti distinctio, et illo numquam </p>
        </div>
        <div className="col-md-2 p-4 justify-content-center d-md-flex">
            <div>
                <h4 className='text-light'>Links</h4>
                <p className='mt-4'><Link to={'/'} style={{color:'black'}}>Home</Link> </p>
                <p><Link to={'/project'} style={{color:'black'}}>Projects</Link></p>
            </div>
        </div>
        <div className="col-md-2 p-4">
            <h4 className='text-light'>Guides</h4>
            <p className='mt-4'>React</p>
            <p>React-bootstrap</p>
            <p>Bootswatch</p>
        </div>
        <div className="col-md-3 p-4">
            <h4 className='text-light'>Contact us</h4>
            <div className='d-flex mt-4'>
                <input type="text" className='form-control' placeholder='Email id' />
                <button className='btn btn-warning ms-3'>Subscribe</button>
            </div>
            <div className="d-flex mt-4 justify-content-between">  
            <FontAwesomeIcon icon={faInstagram} size='2xl' />
            <FontAwesomeIcon icon={faFacebook} size='2xl'/>
            <FontAwesomeIcon icon={faTwitter} size='2xl'/>
            <FontAwesomeIcon icon={faLinkedin} size='2xl'/>       
            </div>
        </div>
        <div className='col-md-1'></div>
    </div>
    
  )
}

export default Footer
