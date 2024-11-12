import { faPen, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { serverUrl } from '../services/serverUrl';
import { editProjectApi } from '../services/allApi';
import { editResponseContext } from '../context/DataShare';



function EditProject({ project }) {
  const [show, setShow] = useState(false);
  const [projectDetails, setProjectDetails] = useState({
    id: project._id,
    title: project.title,
    language: project.language,
    github: project.github,
    website: project.website,
    overview: project.overview,
    proimg: ""
  })
  const [preview, setPreview] = useState("")
  const [key, setKey] = useState(0)

 const {setEditResponse} = useContext(editResponseContext)

  const handleClose = () => {
    setShow(false);
    handleClose1()
  }
         
  const handleShow = () => setShow(true);
  //edit profile


  const handleFileUpload = (e) => {
    e.preventDefault()
    setProjectDetails({ ...projectDetails, proimg: e.target.files[0] })
  }

  useEffect(() => {
    if (projectDetails.proimg) {
      //createObjectURL
      setPreview(URL.createObjectURL(projectDetails.proimg));
    }
  }, [projectDetails.proimg])

  const handleClose1 = () => {
    setProjectDetails({
      title: project.title,
      language: project.language,
      github: project.github,
      website: project.website,
      overview: project.overview,
      proimg: ""
    })


    setPreview("")
    if (key == 0) {
      setKey(1)
    }
    else {
      setKey(0)
    }
  }

  const handleUpdate = async (e) => {
    e.preventDefault()

    const { id, title, language, github, website, overview } = projectDetails

    if (!title || !language || !github || !website || !overview) {
      toast.info("please fill the form compltely")
    }
    else {
      const reqBody = new FormData()

      reqBody.append("title", title)
      reqBody.append("language", language)
      reqBody.append("github", github)
      reqBody.append("website", website)
      reqBody.append("overview", overview)
      preview ? reqBody.append("proimg", proimg) : reqBody.append("proimg", project.proimg)

      const token = sessionStorage.getItem("token")


      if (preview) {  /* if there is new img upload*/
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        const result = await editProjectApi(id, reqBody, reqHeader)
        if (result.status == 200) {
          toast.success('project updated successfully')
          handleClose()
          setEditResponse(result.data)

        }
        else {
          toast.error('something went wrong')
        }

      }
      else { /* if there is no new img upload*/
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
        const result = await editProjectApi(id, reqBody, reqHeader)
        if (result.status == 200) {
          toast.success('project updated successfully')
          handleClose()
          setEditResponse(result.data)

        }
        else {
          toast.error('something went wrong')
        }

      }

    }
  }
  return (
    <div>
      <p onClick={handleShow}><FontAwesomeIcon icon={faPenToSquare} className='text-info' /></p>
      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title className='success'>Edit Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6} sm={12} xs={12} >
              <img src={preview ? preview : `${serverUrl}/uploads/${project.proimg}`} alt="" width={"100%"} height={"50%"} className='m-4' key={key} onChange={(e) => handleFileUpload(e)} />
            </Col>
            <Col md={6} sm={12} xs={12}>
              <div className="mb-3">
                <input type="text" placeholder='title' className='form-control' value={projectDetails.title} onChange={(e) => setProjectDetails({ ...projectDetails, title: e.target.value })} />
              </div>
              <div className="mb-3">
                <input type="text" placeholder='language' className='form-control' value={projectDetails.language} onChange={(e) => setProjectDetails({ ...projectDetails, language: e.target.value })} />

              </div>
              <div className="mb-3">
                <input type="text" placeholder='github' className='form-control' value={projectDetails.github} onChange={(e) => setProjectDetails({ ...projectDetails, language: e.target.value })} />

              </div>
              <div className="mb-3">
                <input type="text" placeholder='website' className='form-control' value={projectDetails.website} onChange={(e) => setProjectDetails({ ...projectDetails, website: e.target.value })} />

              </div>
              <div className="mb-3">
                <textarea name="" id="" placeholder='overview' className='form-control' value={projectDetails.overview} onChange={(e) => setProjectDetails({ ...projectDetails, overview: e.target.value })}></textarea>
              </div>
            </Col>

          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose1}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer theme='colored' position='top-center' autoClose='2000' />

    </div>
  )
}

export default EditProject
