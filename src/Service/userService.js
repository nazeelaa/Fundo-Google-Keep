import axios from "axios";

export const logup=(obj)=>{
    console.log(obj)
    let response=axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",obj)
    return response
}



export const login=(obj)=>{
    let response= axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/login",obj)
    return response
}



