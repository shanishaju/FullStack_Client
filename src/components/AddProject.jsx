import React from 'react'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function AddProject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <>

     <button className='btn btn-success'  onClick={handleShow}>Add Project</button>

     <Modal show={show} onHide={handleClose}size='lg' >
        <Modal.Header closeButton>
          <Modal.Title className='text-success'>Add Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} md={6}>
            <label htmlFor="proimg">
              <input id='proimg' type="file"  style={{display:'none'}}/>
              <img src="https://png.pngtree.com/png-vector/20190508/ourmid/pngtree-upload-cloud-vector-icon-png-image_1027251.jpg" alt="" />
            </label>
            
            </Col>
            <Col sm={12} md={6}>
            <form action="" className='p-3'></form>
            <div className="mb-3">
              <input type="text" placeholder='title ' className='form-control'/>
            </div>
            <div className="mb-3">
            <input type="text" placeholder='language ' className='form-control'/>

            </div>
            <div className="mb-3">
            <input type="text" placeholder='github ' className='form-control'/>

            </div>
            <div className="mb-3">
            <input type="text" placeholder='website ' className='form-control'/>

            </div>
            <div className="mb-3">
              <textarea name="" id=""placeholder='overview 'className='form-control' rows={4}></textarea>
            </div>
            <div className="mb-3"></div>

            </Col>
          </Row>
          
          </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
       
    </>
  )
}

export default AddProject
