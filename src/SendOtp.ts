import { otpUrl } from "./constants.js";
import formUrl from "./utils/formUrl.js";
import { isValidEmail } from "./utils/regex.js"
import axios from "axios"
export default function sendOtp(email:string,company:string,apiKey:string){
    return new Promise(async(resolve,reject)=>{
        if(!email||!isValidEmail(email))return reject("invalid email");
        const Url=formUrl(otpUrl,apiKey);
        try {
            let result=await axios.post(Url,{email:email,company:company});
           
            return resolve(result.data);
        } catch (error) {
           return reject(error);
        }

    })
}

