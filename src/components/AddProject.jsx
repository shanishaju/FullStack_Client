import React, { useEffect } from 'react'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addProjectApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addResponseContext } from '../context/DataShare';
import { useContext } from 'react';



function AddProject() {

  // Modal use states

  const [show, setShow] = useState(false);
  const [projectDetails, setProjectDetails] = useState({
    title: "",
    language: "",
    github: "",
    website: "",
    overview: "",
    proimg: ""

  })
  
  const [preview, setPreview] = useState("")
  const [token, setToken] = useState("")
  const [key, setKey] = useState(0)

  // useContext hook || for accessing context api 29/07 || where data is updated call the function setAddResponse || Assign the result into setAddResponse
  const { setAddResponse } = useContext(addResponseContext)
  console.log(projectDetails);

  //file collecting
  const handleFile = (e) => {
    // console.log(e.target.files[0]);
    setProjectDetails({ ...projectDetails, proimg: e.target.files[0] })
  }


  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
    handleCancel()
  }
  const handleCancel = () => {
    setProjectDetails({
      title: "",
      language: "",
      github: "",
      website: "",
      overview: "",
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

  // Useeffect to convert image into URL

  useEffect(() => {
    if (projectDetails.proimg) {
      //createObjectURL 
      setPreview(URL.createObjectURL(projectDetails.proimg));
    }
  }, [projectDetails.proimg])


  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
    }
  }, [])


  const handleAdd = async(e) => {
    // prevent the default action of an event.
    e.preventDefault()

    const { title, language, github, website, overview, proimg } = projectDetails

    if (!title || !language || !github || !website || !overview || !proimg) {
      toast.info("please fill the form compltely")
    }
    else {
      //api
      //Inorder to send uploaded content use FormData
      const reqBody = new FormData()
      reqBody.append("title", title)
      reqBody.append("language", language)
      reqBody.append("github", github)
      reqBody.append("website", website)
      reqBody.append("overview", overview)
      reqBody.append("proimg", proimg)

      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          //token sending for ensuring user login - token Authorization 
          "Authorization": `Bearer ${token}`
        }

        const result = await addProjectApi(reqBody, reqHeader)
        console.log(result);
        if (result.status == 200) {
          toast.success('Project Added Successfully')
          handleClose()
          // here is where data is being changed so call context here
          setAddResponse(result.data)
        }
      }
      else {
        toast.error('please login')
      }
    }
  }
  return (

    <>

      <div className='ms-auto'>
        <button className='btn btn-success' onClick={handleShow}>Add Project</button>

        <Modal show={show} onHide={handleClose} size='lg' >
          <Modal.Header closeButton>
            <Modal.Title className='text-success'>Add Project Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={12} md={6} xs={12}>
                <label htmlFor="proimg">
                  <input id='proimg' type="file" style={{ display: 'none' }} key={key} onChange={(e) => handleFile(e)} />
                  <img src={preview ? preview : "https://png.pngtree.com/png-vector/20190508/ourmid/pngtree-upload-cloud-vector-icon-png-image_1027251.jpg"} alt="" width={"100%"} />
                </label>

              </Col>
              <Col sm={12} md={6} xs={12}>
                <form action="" className='p-3'></form>
                <div className="mb-3">
                  <input type="text" placeholder='title' value={projectDetails.title} className='form-control' onChange={(e) => setProjectDetails({ ...projectDetails, title: e.target.value })} />
                </div>
                <div className="mb-3">
                  <input type="text" placeholder='language' value={projectDetails.language} className='form-control' onChange={(e) => setProjectDetails({ ...projectDetails, language: e.target.value })} />

                </div>
                <div className="mb-3">
                  <input type="text" placeholder='github' value={projectDetails.github} className='form-control' onChange={(e) => setProjectDetails({ ...projectDetails, github: e.target.value })} />

                </div>
                <div className="mb-3">
                  <input type="text" placeholder='website ' value={projectDetails.website} className='form-control' onChange={(e) => setProjectDetails({ ...projectDetails, website: e.target.value })} />

                </div>
                <div className="mb-3">
                  <textarea name="" id="" placeholder='overview ' value={projectDetails.overview} className='form-control' rows={4} onChange={(e) => setProjectDetails({ ...projectDetails, overview: e.target.value })}></textarea>
                </div>
                <div className="mb-3"></div>

              </Col>
            </Row>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="warning" onClick={handleCancel} >
              Cancel
            </Button>
            <Button variant="success" onClick={handleAdd}>
              Add
            </Button>
          </Modal.Footer>

        </Modal>

      </div>
      <ToastContainer theme='colored' position='top-center' autoClose='2000' />
    </>
  )
}

export default AddProject
