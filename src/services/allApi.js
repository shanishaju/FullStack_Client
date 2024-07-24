
import AddProject from "../components/AddProject"
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