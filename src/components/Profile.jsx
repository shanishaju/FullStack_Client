import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap'

function Profile() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <div className='shadow mx-4 p-3 rounded '>
      
      <div className='d-flex justify-content-between mt-3' onMouseEnter={()=>setOpen(true)}>
        <h5 className='mt-3 text-success'> Profile</h5>
        <button type='button'  onClick={() => setOpen(!open)} className=' btn btn-outline-info'>
      {  !open?  <FontAwesomeIcon icon={faAngleDown} /> :
          <FontAwesomeIcon icon={faAngleUp} />}
          </button>
      </div>

      <Collapse in={open}>
        <div>
        <div className='d-flex justify-content-center align-items-center flex-column'>
      <label htmlFor="profile" className='m-3'>
        <input id='profile' type="file" style={{display:'none'}} />
          <img className='border-success' src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" alt="" style={{height:'150px', width:'170px', borderRadius:'50%'}}/>
      </label>
      <div className="mb-3">
        <input type="text" placeholder='GitHub' className='form-control'/>
      </div>
      <div className="mb-3">
      <input type="text" placeholder='Linkedin' className='form-control'/>
      </div>

      <button className='btn btn-success w-100 mb-3'>Update</button>      
      </div>
        </div>
      </Collapse>
    </div>
    </>
  )
}

export default Profile
