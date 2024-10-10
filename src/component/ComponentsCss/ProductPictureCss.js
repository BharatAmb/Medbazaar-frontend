import { makeStyles } from "@mui/styles";


export const useStyles= makeStyles({


    imgdiv:{
        display:"flex", 
        height:"100%", 
        width:"100%", 
        justifyContent:"center", 
        alignItems:"center"

    },

    img:{
        width:"100%",
        height:'10vh',
        borderRadius: 10,
        aspectRatio:5/8
    },

    div1:{
        display:"flex", 
        justifyContent:'center',
        alignItems:"center", 
        width:"100%",
        height:'100vh',
        background:'black'
    },

    div2:{
        justifyContent:'center',
        width:"50%",
        height:"50%",
        alignItems:'center'
    },

   
    imgdiv2:{
        display:'flex',
        justifyContent:'center',alignItems:'center',
        width:'100%',
        height:'100vh',
        background:'#fff'
    }


})