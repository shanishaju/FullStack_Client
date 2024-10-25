import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Collapse } from "react-bootstrap";
import { serverUrl } from "../services/serverUrl";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editProfileApi } from "../services/allApi";

function Profile() {
  const [open, setOpen] = useState(false);

  // usestate for getting the input content
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
    github: "",
    linkedin: "",
    profile: "",
  });
  const [existingimg, setExistingimg] = useState("")
  const [editstatus, setEditStatus] = useState(false)
  const [preview, setPreview] = useState("")
  const handleProfileFile = (e) => {
    e.preventDefault()
    setUserDetails({ ...userDetails, profile: e.target.files[0] })
  }

  useEffect(() => {
    if (userDetails.profile) {
      setPreview(URL.createObjectURL(userDetails.profile))

    }
    else {
      setPreview("")
    }
  }, [userDetails.profile])

  useEffect(() => {
    if (sessionStorage.getItem("exsistingUser")) {
      const user = JSON.parse(sessionStorage.getItem("exsistingUser"));
      setUserDetails({
        ...userDetails,
        username: user.username,
        email: user.email,
        password: user.password,
        github: user.github,
        linkedin: user.linkedin
      })
      setExistingimg(user.profile);
    }
    setEditStatus(false)

  }, [editstatus])

  const handleProfileUpdate = async () => {
    const { username, email, password, github, linkedin, profile } = userDetails
    if (!username || !email || !password || !github || !linkedin) {
      toast.info("pls fill the fields")
    }
    else {
      const reqBody = new FormData()
      reqBody.append("username", username)
      reqBody.append("email", email)
      reqBody.append("password", password)
      reqBody.append("github", github)
      reqBody.append("linkedin", linkedin)
      profile ? reqBody.append("profile", profile) : reqBody.append
        ("profile", existingimg)

      const token = sessionStorage.getItem("token")

      if (preview) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        const result = await editProfileApi(reqBody, reqHeader)
        if (result.status == 200) {
          toast.success('profile updated successfully')
          sessionStorage.setItem("exsistingUser", JSON.stringify(result.data))
          setEditStatus(true)
        }
        else {
          toast.error('something went wrong')
        }
      }
      else {
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
        const result = await editProfileApi(reqBody, reqHeader)
        if (result.status = 200) {
          toast.success('profile updated successfully')
          sessionStorage.setItem("exsistingUser", JSON.stringify(result.data))
          setEditStatus(true)

        }
        else {
          toast.error('something went wrong')
        }

      }
    }
  }

  return (
    <>
      <div className="shadow mx-4 p-3 rounded">
        <div
          className="d-flex justify-content-between mt-3"
          onMouseEnter={() => setOpen(true)}
          // onMouseLeave={()=> setOpen(true)}

        >
          <h5 className="mt-3 text-success"> Profile</h5>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className=" btn btn-outline-info"
          >
            {!open ? (
              <FontAwesomeIcon icon={faAngleDown} />
            ) : (
              <FontAwesomeIcon icon={faAngleUp} />
            )}
          </button>
        </div>

        <Collapse in={open}>
          <div>
            <div className="d-flex justify-content-center align-items-center flex-column">
              <label htmlFor="profile" className="m-3">
                <input id="profile" type="file" style={{ display: "none" }} onChange={(e) => handleProfileFile(e)} />
                {existingimg == "" ?
                  <img
                    className="border-success"
                    src={
                      preview
                        ? preview
                        : "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg"
                    }
                    alt=""
                    style={{
                      height: "150px",
                      width: "170px",
                      borderRadius: "50%",
                    }}
                  />
                  :
                  <img
                    className="border-success"
                    src={
                      preview
                        ? preview
                        : `${serverUrl}/uploads/profile/${existingimg}`
                    }
                    alt=""
                    style={{
                      height: "150px",
                      width: "170px",
                      borderRadius: "50%",
                    }}
                  />
                }
              </label>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="GitHub"
                  className="form-control"
                  value={userDetails.github}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, github: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Linkedin"
                  className="form-control"
                  value={userDetails.linkedin}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, linkedin: e.target.value })
                  }
                />
              </div>

              <button type="button" className="btn btn-success w-100 mb-3" onClick={handleProfileUpdate} >Update</button>
            </div>
          </div>
        </Collapse>
      </div>
      <ToastContainer theme='colored' position='top-center' autoClose='2000' />

    </>
  );
}

export default Profile;
