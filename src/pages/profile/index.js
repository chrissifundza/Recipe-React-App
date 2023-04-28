
import * as React from 'react';
import {  Alert, Avatar, Box, Card,  CardActions,  CardContent, CardHeader, Collapse, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Snackbar, styled, TextField, Typography, } from "@mui/material";
import Navbar from "../../components/Header/Navbar";
import { ContainerCardRecipe, ContainerProfile, ContainerProfile2, ContainerProfile3, ContainerProfile4, ContainerProfile5, ContainerSavedRecipes, SavedRecipeTitle, TitleProfile } from "./style";
import "./index.css"
import { Delete, Email, Expand, ExpandMore, Save, Share, Visibility, VisibilityOff } from "@mui/icons-material";
import { LoadingButton } from '@mui/lab';
import { colors } from '../../theme';
import { FaGreaterThan } from 'react-icons/fa';
import { AuthContext } from '../../context/authContext';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { storage } from '../../fbStorage/storage';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  
} from "firebase/storage";
import Recipe from './singlecard';
export default function Profile(){

   const {CurrentUser} =React.useContext(AuthContext)
    const [showPassword, setShowPassword] = React.useState(false);
    const [Inputs, setInputs] = useState({name:CurrentUser?.name,email:CurrentUser?.email,password:"",image:CurrentUser?.image });
    const [open, setOpen] = useState(false);
    const [AlertType, setAlertType] = useState("success")
    const [AlertMessage, setAlertMessage] = useState("")
    const [imageUpload, setImageUpload] = useState(null);
    const [selectedImage, setselectedImage] = useState('');
  const [AllRecipes, setAllRecipes] = useState([])
    const navigate = useNavigate();
   console.log(CurrentUser)
    useEffect(()=>{
      if (CurrentUser===null) navigate("/account")
    },[CurrentUser])
    const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = e =>{
    setInputs(prev=>({...prev, [e.target.name]:e.target.value}))
}


const handleClose = () => {
  setOpen(false);

};
const handleSubmit = async e =>{
  e.preventDefault()
  if(imageUpload==null){
    try {
      const res = await axios.put(`http://localhost:8000/api/auth/updateuser/${CurrentUser.iduser}`,Inputs)
      console.log(res.data)

      setAlertType("success")
     setAlertMessage(res.data)
      setOpen(true)
      
  } catch (error) {
      setAlertType("error")
      setAlertMessage(error.response.data)
      setOpen(true)
  }
  }else{

  
    const imageRef = ref(storage, `Profiles/${imageUpload.name }`);
  
  uploadBytes(imageRef, imageUpload).then((snapshot1) => {
    getDownloadURL(snapshot1.ref).then( async (url1) =>  {
      Inputs.image=url1
      try {
        const res = await axios.put(`http://localhost:8000/api/auth/updateuser/${CurrentUser.iduser}`,Inputs)
        console.log(res.data)

        setAlertType("success")
       // setAlertMessage(res.data)
        setOpen(true)
        
    } catch (error) {
        setAlertType("error")
        setAlertMessage(error.response.data)
        setOpen(true)
    }
    })

  })
}
   
}
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  
  const previewImage = () => {
    console.log("running")
    var input = document.createElement("input");
    input.type = "file";
    input.onchange = (event) => {
      const imageFiles = event.target.files;
      setImageUpload(event.target.files[0])
      const imageFilesLength = imageFiles.length;
  
      if (imageFilesLength > 0) {
          const imageSrc = URL.createObjectURL(imageFiles[0]);
         // const imagePreviewElement = document.querySelector("#preview-selected-image");
         // imagePreviewElement.src = imageSrc;
         setselectedImage(imageSrc)
         // imagePreviewElement.style.display = "block";
      }
    };
    input.click();
   
};

useEffect(()=>{
  const getSavedRecipe=async()=>{
    try {
      const res = await axios.post("http://localhost:8000/api/recipe/getallrecipe", CurrentUser)
     console.log(res.data)
     setAllRecipes(res.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  getSavedRecipe()
},[])

    return(
        <>
        <Navbar/>
         <ContainerProfile>
        <TitleProfile>Profile</TitleProfile>
            <ContainerProfile2>

                  <Box sx={{ width: '35%', display:"flex", justifyContent:"center", alignItems:"center",flexDirection:"column" }}>
                      <SavedRecipeTitle>
                          User Details
                      </SavedRecipeTitle>
                <Snackbar  sx={{ position: 'absolute', top:"20px", right:"20px" }} anchorOrigin={{ vertical: 'top',horizontal: 'center',}} open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={AlertType} sx={{ width: '100%' }}>
                        {AlertMessage}
                    </Alert>
                </Snackbar>
                        <Card variant="outlined" sx={{ width: '100%' }}>
                            <CardContent>
                                <ContainerProfile3>
                                    <ContainerProfile4>
                                        <img onClick={previewImage} src= {selectedImage !==''?selectedImage:CurrentUser?.image} className="profileUserPhoto" alt='UserPhoto'/>
                                    </ContainerProfile4>
                                </ContainerProfile3>
                                <ContainerProfile5>
                                <div className="inputContainer">
                                    <TextField
                                    error={false}
                                    id="outlined-error"
                                    label="Name"
                                    name="name" onChange={handleChange} 
                                    defaultValue={CurrentUser?.name}
                                    sx={{width:"100%"}}
                                    />
                                    
                                </div>
                                <TextField
                                    error={false}
                                    id="outlined-error-helper-text"
                                    label="Email"
                                    defaultValue={CurrentUser?.email}
                                    helperText=""
                                    name="email" onChange={handleChange} 
                                    sx={{width:"100%"}}
                                    />

<FormControl sx={{ mt: "20px", width: '100%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Update Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Old Passwrd"
            name="password" onChange={handleChange} 
           
             defaultValue={CurrentUser?.password}
          />
        </FormControl>


         <LoadingButton
        loading={false}
        loadingPosition="start"
        onClick={handleSubmit}
        variant="outlined"
        sx={{ mt: "20px", width: '100%' , backgroundColor:colors.primary, color:colors.white}}
      >
        Update
      </LoadingButton>
                                </ContainerProfile5>
                            </CardContent>
                       
                    </Card>
                    </Box>
                    <ContainerSavedRecipes variant="outlined">
                      
                      <SavedRecipeTitle>
                          Saved Recipes
                      </SavedRecipeTitle>


                {AllRecipes&&AllRecipes.map((recipe)=><Recipe {...recipe}/>)}
 
                    </ContainerSavedRecipes>
            </ContainerProfile2>
        </ContainerProfile>
        </>
       
    )
}