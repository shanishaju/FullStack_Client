
import { commonApi } from "./commonApis"
import { serverUrl } from "./serverUrl"



//register
export const registerApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/register`,reqBody,"")
}

