import React from 'react'
import TextField from '@mui/material/TextField';
import { Button,  } from '@mui/material';
import { login,logup } from '../../Service/userService';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import './Signup.css'
const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const firstNameRegex = /[A-Z]{1}[a-z]{2,}/;
const lastNameRegex = /[A-Z]{1}[a-z]{2,}/;

function Signup(){ 

    let history=useHistory()
    const [fnamehelper,setfnamehelper]=React.useState("")
    const [fnameerror,setfnameerror]=React.useState(false)
    const [lnamehelper,setlnamehelper]=React.useState("")
    const [lnameerror,setlnamerror]=React.useState(false)
    const [unamehelper,setunamehelper]=React.useState("")
    const [unameerror,setunamerror]=React.useState(false)
    const [pwdhelper,setpwdhelper]=React.useState("")
    const [pwderror,setpwderror]=React.useState(false)

    const [namepass,setname]=React.useState({firstName:"",lastName:"",email:"",password:"",service:"advance"})
    function takefname(event){
        setname({...namepass,firstName:event.target.value})
        
    }
    function takelname(event){
        setname({...namepass,lastName:event.target.value})

    }
    function takeuname(event){
        setname({...namepass,email:event.target.value})
        
    }
    function takepwd(event){
        setname({...namepass,password:event.target.value})
        
    }
    function pushFunc(){
        history.push("/")
    }

    function onsubmit(){
        if(namepass.firstName==="" && namepass.lastName==="" && namepass.email==="" && namepass.password==="")
        {
            setfnameerror(true)
            setfnamehelper("please enter correct First name")

            setlnamerror(true)
            setlnamehelper("please enter the correct last name")

            setunamerror(true)
            setunamehelper("please enter the correct email")

            setpwderror(true)
            setpwdhelper("please enter the correct Password")
        }
        let firstnameTest=firstNameRegex.test(namepass.firstName)
        let lastnameTest=lastNameRegex.test(namepass.lastName)
        let usernameTest=emailRegex.test(namepass.email)
        let pwdTest=passwordRegex.test(namepass.password)
    
            console.log(firstnameTest)
            console.log(lastnameTest)
            console.log(usernameTest)
            console.log(pwdTest)
        if(firstnameTest)
        { 
            setfnameerror(false)
            setfnamehelper("")
            
        }
        else 
        {
            setfnameerror(true)
            setfnamehelper("please enter the correct First name")
        }
        if(lastnameTest)
        { 
            setlnamerror(false)
            setlnamehelper("")
            
        }
        else 
        {
            setlnamerror(true)
            setlnamehelper("please enter the correct last name")
        }
        if(usernameTest)
        { 
            setunamerror(false)
            setunamehelper("")
            
        }
        else 
        {
            setunamerror(true)
            setunamehelper("please enter the correct last name")
        }

        if(pwdTest)
        { 
            setpwderror(false)
            setpwdhelper("")
            
        }
        else 
        {
            setpwderror(true)
            setpwdhelper("please enter the correct password")
        }
        if(firstnameTest===true && lastnameTest===true && usernameTest===true && pwdTest===true)
        {
            logup(namepass).then((response)=>{

            console.log(response)
            localStorage.setItem("token",response.data.id)
            
            

            }).catch((error)=>{
                console.log(error)
            })
        }
    }

            
        return(
            
          <Box className='supercontainer'>
              <Box className='signupcontainer'>
              <Box className='google'>
                <span className='Title1'>G</span>
                <span className='Title2'>o</span>
                <span className='Title3'>o</span>
                <span className='Title4'>g</span>
                <span className='Title5'>l</span>
                <span className='Title6'>e</span></Box>
                <div className='createaccount'><span>Create your Google Account</span></div>
                 <div className='fandlbox'>
                 <TextField className='name' label="First name" variant="outlined" size="small"  error={fnameerror}
                  helperText={fnamehelper} onChange={takefname} />

                 <TextField className='name' label="Last name" variant="outlined" size="small"  error={lnameerror}
                  helperText={lnamehelper} onChange={takelname}/>
                 </div>
                 <Box className='emailbox'>
                 <TextField fullWidth label="Username" id="fullWidth" size="small" error={unameerror}
                  helperText={unamehelper} onChange={takeuname}></TextField>
                 <div className='emailtxt'><span>you can use letters,numbers & periods</span></div></Box>

                
                     <div class="emailblue"><span>Use my current email address instead</span></div>
                     <Box className='fandlbox'>
                 <TextField className='name' type="password" label="Password" variant="outlined" size="small"  error={pwderror}
                  helperText={pwdhelper} onChange={takepwd} />
                 <TextField className='name'type="password" label="Confirm" variant="outlined" size="small"  error={pwderror}
                  helperText={pwdhelper} onChange={takepwd} /></Box>
                 <div className='text'><span>use 8 or more characters with a mix of letters, numbers &
                 symbols</span></div>
                 <Box class="lastcontainer">
                     <Button onClick={pushFunc}>Sign in instead</Button>
                     <Button variant="contained" size='small' onClick={onsubmit} size="large">Next</Button>                 
                     </Box>  

              </Box>
              <Box className='containerImg'>
              <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt='' />

               <div className='imgtxt'>One account. All of Google<br></br> working for you</div>
                  
                   
              </Box>
              </Box>

         
                
                 

             

        )
    }


export default Signup
