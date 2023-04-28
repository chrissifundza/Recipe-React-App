import { useContext, useState } from "react";
import * as Components from "./style";
import "./index.css"
import Navbar from "../../components/Header/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { AuthContext } from "../../context/authContext";

export default function LoginRegister(){
    const navigate = useNavigate()
    const [signIn, toggle] = useState(true);
    const [Inputs, setInputs] = useState({name:"",email:"",password:"",image:"/img/user.png" });
    const [InputsLogin, setInputsLogin] = useState({email1:"",password1:"" });
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [AlertType, setAlertType] = useState("success")
    const [AlertMessage, setAlertMessage] = useState("")
   const {CurrentUser, login, logout} = useContext(AuthContext)
console.log(InputsLogin)

      const handleClose = () => {
        setOpen(false);
        setOpen2(false);
      };
    
    function Login() {
        navigate('/userhome')
    }
    const handleChange = e =>{
         setInputs(prev=>({...prev, [e.target.name]:e.target.value}))
    }

    const handleSubmit = async e =>{
        e.preventDefault()
    
       
        try {
            const res = await axios.post("http://localhost:8000/api/auth/register", Inputs)
            console.log(res)
            setAlertType("success")
            setAlertMessage(res.data)
            setOpen(true)
            if (res.data==="User has been created") {window.location.reload()}
        } catch (error) {
            setAlertType("error")
            setAlertMessage(error.response.data)
            setOpen(true)
        }
    }
    const handleChangeLogin = e =>{
        setInputsLogin(prev=>({...prev, [e.target.name]:e.target.value}))
   }

   const handleSubmitLogin = async e =>{
    e.preventDefault()
    
   
    try {
        await login(InputsLogin)
        Login()
    } catch (error) {
        setAlertType("error")
        setAlertMessage(error.response.data)
        setOpen2(true)
    }
}
  
    return(
        <div className="log">
        <Link className="HomeLink" to='/'>Home</Link>
        <div className="containerLog">
        <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
            <Components.Form>
                <Components.Title>Create Account</Components.Title>
                <Snackbar  sx={{ position: 'absolute', top:"20px", right:"20px" }} anchorOrigin={{ vertical: 'top',horizontal: 'center',}} open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={AlertType} sx={{ width: '100%' }}>
                        {AlertMessage}
                    </Alert>
                </Snackbar>
                <Components.Input type='text' placeholder='Name' name="name" onChange={handleChange} />
                <Components.Input type='email' placeholder='Email' name="email" onChange={handleChange} />
                <Components.Input type='password' placeholder='Password' name="password" onChange={handleChange} />
                <Components.Button onClick={handleSubmit}>Sign Up</Components.Button>
            </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer signinIn={signIn}>
             <Components.Form>
                 <Components.Title>Sign in</Components.Title>
                 <Snackbar  sx={{ position: 'absolute', top:"20px", right:"20px" }} anchorOrigin={{ vertical: 'top',horizontal: 'center',}} open={open2} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={AlertType} sx={{ width: '100%' }}>
                        {AlertMessage}
                    </Alert>
                </Snackbar>
                 <Components.Input type='email' placeholder='Email' name="email1" onChange={handleChangeLogin} />
                 <Components.Input type='password' placeholder='Password' name="password1" onChange={handleChangeLogin} />
                 <Components.Anchor href='/reset'>Forgot your password?</Components.Anchor>
                 <Components.Button onClick={handleSubmitLogin}>Sigin In</Components.Button>
             </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signinIn={signIn}>
            <Components.Overlay signinIn={signIn}>

            <Components.LeftOverlayPanel signinIn={signIn}>
                <Components.Title>Welcome Back!</Components.Title>
                <Components.Paragraph>
                    To keep connected with us please login with your personal info
                </Components.Paragraph>
                <Components.GhostButton onClick={() => toggle(true)}>
                    Sign In
                </Components.GhostButton>
                </Components.LeftOverlayPanel>

                <Components.RightOverlayPanel signinIn={signIn}>
                  <Components.Title>Hello, Friend!</Components.Title>
                  <Components.Paragraph>
                      Enter Your personal details and start journey with us
                  </Components.Paragraph>
                      <Components.GhostButton onClick={() => toggle(false)}>
                          Sigin Up
                      </Components.GhostButton> 
                </Components.RightOverlayPanel>

            </Components.Overlay>
        </Components.OverlayContainer>

    </Components.Container>
    </div>
    </div>
    )
}