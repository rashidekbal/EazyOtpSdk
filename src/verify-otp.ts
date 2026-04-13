import axios from "axios";
import { verifyUrl } from "./constants.js";
import formUrl from "./utils/formUrl.js";
import { isValidEmail } from "./utils/regex.js";

export default async function verifyOtp(email:string,otp:number,apiKey:string){
    return new Promise(async(resolve,reject)=>{
        if(!email||!otp||!apiKey)return reject("invalid parameters");
        if(!isValidEmail(email))return reject("invalid email");
        const Url=formUrl(verifyUrl,apiKey);
        try {
            await axios.post(Url,{email:email,otp:otp});
            return resolve(true);
        } catch (error:any) {
            if(error.response.status==403)return reject(error);
            return resolve(false);
        }
    })
}
