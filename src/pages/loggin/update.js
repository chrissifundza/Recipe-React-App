import { Alert, Snackbar } from "@mui/material";
import axios from "axios";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as Components from "./style";
import "./index.css"
import { AuthContext } from "../../context/authContext";
export default function Update(){
    const location = useLocation();
    const navigate = useNavigate()
    const [signIn, toggle] = useState(false);
    const [Inputs, setInputs] = useState({email:location.state.email,otp:0,newpassword:"",confirmpassword:""});

const otp = location.state.otp

console.log(otp)
    const [open, setOpen] = useState(false); 
   
    const [AlertType, setAlertType] = useState("success")
    const [AlertMessage, setAlertMessage] = useState("")
    const {CurrentUser} = useContext(AuthContext)
    console.log(CurrentUser)
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
       console.log(otp, " ",parseInt(Inputs.otp))
   if(otp!==parseInt(Inputs.otp)) return alert("OTP is wrong")
      if (Inputs.confirmpassword!==Inputs.newpassword) return alert("Password does'nt match!")
       try {
           const res = await axios.post("http://localhost:8000/api/auth/updatepassword", Inputs)
           console.log(res)
          
           if (res.data==="User has been updated.") {
            setAlertType("success")
            setAlertMessage(res.data)
            setOpen(true)
           }
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
                <Components.Title>Reset Password</Components.Title>
                <Snackbar  sx={{ position: 'absolute', top:"20px", right:"20px" }} anchorOrigin={{ vertical: 'top',horizontal: 'center',}} open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={AlertType} sx={{ width: '100%' }}>
                        {AlertMessage}
                    </Alert>
                </Snackbar>
              
                <Components.Input type='number' placeholder='Enter OTP' name="otp" onChange={handleChange} />
                <Components.Input type='password' placeholder='New Password' name="newpassword" onChange={handleChange} />
                <Components.Input type='password' placeholder='Confirm Password' name="confirmpassword" onChange={handleChange} />
                <Components.Button onClick={handleSubmit}>Update</Components.Button>
                <Components.Anchor href='/account'>Back to login</Components.Anchor>
            </Components.Form>
       
        </Components.Container>
        </div>
        </div>
    )
}