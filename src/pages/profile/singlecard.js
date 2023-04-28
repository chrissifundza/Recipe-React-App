import { Avatar, Card, CardActions, CardHeader, IconButton, Typography } from "@mui/material";
import { ContainerCardRecipe } from "./style";
import { Delete, Email, ExpandMore } from "@mui/icons-material";
import { colors } from "../../theme";

export default function Recipe({idmeal,idrecipe,recipe_country,recipe_img,recipe_name,youtube_link}){
    return(
        
        <ContainerCardRecipe key={idrecipe}>
        <Card sx={{width:"100%",  
          paddingLeft:"10px",
          paddingRight:"10px",
          backgroundColor:colors.primary}}>
        <Card sx={{ maxWidth: "100%" ,margin:0,}}>
<CardHeader
avatar={
<Avatar  alt="Remy Sharp"
src={recipe_img}
sx={{ width: 56, height: 56 }}   >

</Avatar>
}
action={
<IconButton sx={{fontSize:"14px"}} aria-label="settings">
<Delete  />
</IconButton>
}
title={<Typography sx={{fontSize:"18px"}}>{recipe_name}</Typography>}
subheader={<Typography sx={{fontSize:"12px",}} color="text.secondary">{recipe_country}</Typography>}
/>


<CardActions disableSpacing>

<IconButton aria-label="share">
<Email /> Send to your email
</IconButton>
<ExpandMore

aria-label="show more"
>
View 
<ExpandMore />
</ExpandMore>
</CardActions>

</Card>
</Card>
        </ContainerCardRecipe>
    )
}