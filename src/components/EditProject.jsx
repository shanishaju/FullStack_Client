import { faPen, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function EditProject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
        <p onClick={handleShow}><FontAwesomeIcon icon={faPenToSquare} className='text-info' /></p>
       <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title className='success'>Edit Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6} sm={12}>
            <img src="https://projectfair-ts-frontend.vercel.app/assets/designer-CuSJ9Yh0.svg" alt=""  width={100} className='m-4'/>
            </Col>
            <Col md={6} sm={12}>
            <div className="mb-3">
              <input type="text"  placeholder='Media Player' className='form-control'/>
            </div>
            <div className="mb-3">
            <input type="text"  placeholder='Media Player' className='form-control'/>

            </div>
            <div className="mb-3">
            <input type="text"  placeholder='Media Player' className='form-control'/>

            </div>
            <div className="mb-3">
            <input type="text"  placeholder='Media Player' className='form-control'/>

            </div>
            <div className="mb-3">
              <textarea name="" id="" placeholder='overvire=ew' className='form-control'></textarea>
            </div>
            </Col>

          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EditProject
