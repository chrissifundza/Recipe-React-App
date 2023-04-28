import { Alert, Snackbar } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Components from "./style";
import "./index.css"
export default function PasswordChange(){
    const navigate = useNavigate()
    const [Inputs, setInputs] = useState({password:""});

    const [open, setOpen] = useState(false);
   
    const [AlertType, setAlertType] = useState("success")
    const [AlertMessage, setAlertMessage] = useState("")

    const handleClose = () => {
        setOpen(false);
    
      };
    
    const handleChange = e =>{
        setInputs(prev=>({...prev, [e.target.name]:e.target.value}))
   }
   function Login() {
    navigate('/passwordchange')
}
   const handleSubmit = async e =>{
       e.preventDefault()
   
      
       try {
           const res = await axios.post("http://localhost:8000/api/auth/reset", Inputs)
           console.log(res)
           setAlertType("success")
           setAlertMessage(res.data)
           setOpen(true)
           if (res.data==="User has been created") Login() 
       } catch (error) {
           setAlertType("error")
           setAlertMessage(error.response.data)
           setOpen(true)
       }
   }
    return(
        <div className="log">
        <Link className="HomeLink" to='/'>Home</Link>
        <div className="containerLog">
        <Components.Container>
        
            <Components.Form>
                <Components.Title>Update Password</Components.Title>
                <Snackbar  sx={{ position: 'absolute', top:"20px", right:"20px" }} anchorOrigin={{ vertical: 'top',horizontal: 'center',}} open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={AlertType} sx={{ width: '100%' }}>
                        {AlertMessage}
                    </Alert>
                </Snackbar>
                <Components.Input type='email' placeholder='Enter code sent to email' name="code" onChange={handleChange}/>

                <Components.Input type='email' placeholder='Enter new password' name="password" onChange={handleChange} />
                <Components.Button onClick={handleSubmit}>Update Password</Components.Button>
                <Components.Anchor href='/account'>Back to login</Components.Anchor>
            </Components.Form>
       
        </Components.Container>
        </div>
        </div>
    )
}