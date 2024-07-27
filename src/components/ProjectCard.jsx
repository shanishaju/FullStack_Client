import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom'; 
import { serverUrl } from '../services/serverUrl';


function ProjectCard({projects}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div className='mt-5 d-flex ' style={{width:'100%'}}>
    <Card style={{ width: '100%' }} className='shadow' onClick={handleShow}>
      <Card.Img variant="top" src={`${serverUrl}/uploads/${projects?.proimg}`}  height={"250px"}/>
      <Card.Body >
        <Card.Title className='text-center'>{projects?.title}</Card.Title>
      </Card.Body>
    </Card>



    <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{projects?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
              <div className="col-md-6">
                <img src={`${serverUrl}/uploads/${projects?.proimg}`} alt="" width={"100%"}/>
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-4">
                <h5>Description:</h5>
                <p>{projects?.overview}</p>
                <h5>Technology:</h5>
                <p>{projects?.language}</p>
                <h5></h5>
              </div>
          </div>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-start'>
          <Link to={projects?.github}> <FontAwesomeIcon icon={faGithub} className='fa-2x' style={{color: "#74C0FC",}} />
          </Link>
          <Link to={projects?.website}><FontAwesomeIcon icon={faLink} className='fa-2x ms-4' style={{color: "#74C0FC",}} /> </Link>
          </Modal.Footer>
      </Modal>
    </div>
      
    </>
  )
}

export default ProjectCard
