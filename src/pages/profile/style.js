import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { colors } from "../../theme";

export const ContainerProfile = styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    [theme.breakpoints.down('sm')]:{
        flexDirection:'column',
        alignItems:'center',
        
    }
}))
export const TitleProfile = styled(Typography)(()=>({
    fontSize:'30px',
    margin:'20px',
    letterSpacing:'3px',
    fontWeight:'lighter'
}))

export const ContainerProfile2 = styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    gap:"40px",
    borderTop:`1px solid ${colors.dove_gray}`,
    [theme.breakpoints.down('sm')]:{
        flexDirection:'column',
        alignItems:'center',
        
    }
}))

export const ContainerProfile3 = styled(Box)(({theme})=>({
   position:'relative',
   width:"100%",
   display:'flex',
   justifyContent:'center',
   
}))
export const ContainerProfile4 = styled(Box)(({theme})=>({
    position:'relative',
    width:"100px",
    height:"100px",
    overflow:'hidden',
    borderRadius:'50%',
    border:`4px solid ${colors.secondary}`
 }))

 export const ContainerProfile5 = styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    marginTop:'20px'

 }))

 export const ContainerSavedRecipes = styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'column',
   
    alignItems:'center',
    width:'50%',
    [theme.breakpoints.down('sm')]:{
        flexDirection:'column',
        alignItems:'center',
        
    }
}))

export const SavedRecipeTitle = styled(Typography)(()=>({
    fontSize:'20px',
    margin:'20px',
    letterSpacing:'3px',
    fontWeight:'lighter'
}))

export const ContainerCardRecipe = styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    marginBottom:'20px',
   

 }))