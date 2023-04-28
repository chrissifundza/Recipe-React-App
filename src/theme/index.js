import { createTheme } from "@mui/material/styles"
import { lighten } from "polished";
export const colors = {
    primary:'#E16120',
    secondary:'#fe9e0d',
    success:'',
    info:'#795548',
    danger:'',
    warning:'',
    dark:'',
    light:'',
    muted:'',
    border:'',
    inverse:'',
    shaft:'#212121',

    dim_gray:'',
    dove_gray:'#e0e0e0',
    body_bg:'',
    light_gray:'#efebe9',

    white:'#fff',
    black:'#000'
}

const theme = createTheme({
    palette:{
        primary:{
            main:colors.primary
        },
        secondary:{
            main:colors.secondary
        }
    },
    components:{
        MuiButton:{
            defaultProps:{
                disableRipple:true,
                disableElevation:true
            }
        },
        MuiDrawer:{
            styleOverrides:{
                paper:{
                    width:259,
                    background:colors.primary,
                    color:colors.white,
                    borderRadius:'0px 100px 0px 0px',
                    borderRight:`2px solid ${colors.info}`
                }
            }
        },
        ApplyNowButton:{
            styleOverrides:{
                root:{
                    color:colors.white
                },
                primary:{
                    background:colors.primary,
                    "&:hover":{
                        background:lighten(0.05, colors.primary)
                    }
                },
                secondary:{
                    background:colors.secondary,
                    "&:hover":{
                        background:lighten(0.05, colors.secondary)
                    }
                }
            }
        }
    }
})
export default theme;