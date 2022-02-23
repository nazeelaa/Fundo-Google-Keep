import React, { Component } from 'react'
import TextField from '@mui/material/TextField';
import { Button, Checkbox, getModalUtilityClass } from '@mui/material';
import { login } from '../../Service/userService';
import { useHistory } from 'react-router-dom';
import { Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import './Signin.css'
import { display } from '@mui/system';

const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
//const firstNameRegex = /[A-Z]{1}[a-z]{2,}/;
// const lastNameRegex = /[A-Z]{1}[a-z]{2,}/;

function Signin() {
    let history = useHistory()
    const [pwdhelper, setpwdhelper] = React.useState("")
    const [pwderror, setpwderror] = React.useState(false)
    const [emailhelper, setemailhelper] = React.useState("")
    const [emailerror, setemailerror] = React.useState(false)
    const [emailpass, setemail] = React.useState({ email: "", password: "" })
    console.log(emailpass.email)
    function takemailid(event) {
        setemail({ ...emailpass, email: event.target.value })

    }
    function takepwd(event) {
        setemail({ ...emailpass, password: event.target.value })

    }
    function pushFunc() {
        history.push("/signup")

    }

    function onsubmit() {

        if (emailpass.email === "" && emailpass.password === "") {
            setemailerror(true)
            setemailhelper("please enter the correct email")

            setpwderror(true)
            setpwdhelper("please enter correct password")

        }

        let emailTest = emailRegex.test(emailpass.email)
        let pwdTest = passwordRegex.test(emailpass.password)
        console.log(emailTest)
        console.log(pwdTest)
        if (emailTest) {
            setemailerror(false)
            setemailhelper("")

        }
        else {
            setemailerror(true)
            setemailhelper("please enter the correct email")
        }

        if (pwdTest) {
            setpwderror(false)
            setpwdhelper("")
        }
        else {
            setpwderror(true)
            setpwdhelper("please enter correct password")
        }
        if (emailTest === true && pwdTest === true) {
            login(emailpass).then((response) => {
                console.log(response)
                localStorage.setItem("token", response.data.id)
                history.push("/dashboard")

            }).catch((error) => {
                console.log(error)

            })
        }
    }
    

     
    
    return (
        <Box className='container'>
    
            <Box className='googleContainer'>
           
                <span className="Title1">G</span>
                <span className="Title2">o</span>
                <span className="Title3">o</span>
                <span className="Title4">g</span>
                <span className="Title5">l</span>
                <span className="Title6">e</span></Box>

                <div className='SigninContainer'><span>Sign in</span></div>
                <div className='signinText'><span>Use Your Google Account</span></div>
                <div className='TextBoxes'>
                    <div id="signinbox"><TextField fullWidth label="Email"  size='medium'
                      error={emailerror}
                      helperText={emailhelper}
                      id="outlined-error"
                      onChange={takemailid}/></div>
                    <div id="signinbox"><TextField type="password" fullWidth label="Password" size='medium'
                     error={pwderror}
                     helperText={pwdhelper}
                     id="outlined-error"
                     onChange={takepwd} /></div>
                </div>
                <div className='forgetmailText'><span>Forget email?</span></div>
                <div id="text"><span>Not Your Computer? Use Guest mode to sign in privately.</span></div>
                <div className='learnMoreText'><span>Learn more</span></div>
                <div className='createAccount'>
                    <div className='createAccountText'><Button onClick={pushFunc} size='small' >Create Account</Button></div>
                    <div className='createAccountButton'><Button variant="contained" size='small' onClick={onsubmit} size="large">Next</Button></div>
                </div>
            </Box>

    )
    }
export default Signin


