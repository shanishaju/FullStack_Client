import { commonApi } from "./commonApis"
import { serverUrl } from "./serverUrl"



//register
export const registerApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/register`,reqBody,"")
}

//login
export const loginApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/login`,reqBody,"")
}

//add project
export const addProjectApi = async(reqBody,reqHeader)=>{
    return await commonApi('POST',`${serverUrl}/addProject`,reqBody,reqHeader)
}

//home project
export const homeProjectApi = async()=>{
    return await commonApi('GET',`${serverUrl}/homeproject`,"","")
}

//all project
export const allProjectApi = async(searchKey,reqHeader)=>{

    return await commonApi('GET',`${serverUrl}/allProjects?search=${searchKey}`,"",reqHeader)
}

//user project
export const userProjectApi = async(reqHeader)=>{

    return await commonApi('GET',`${serverUrl}/userProject`,"",reqHeader)
}

// api for deleting the project using project id
export const deleteProjectApi = async (id)=>{
    return await commonApi('DELETE',`${serverUrl}/delete/${id}`,{},"")
}