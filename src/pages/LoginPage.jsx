import React from "react";
import {Box, TextField, Button} from "@mui/material"
//import kemal from "../images/Kemal.png"


const LoginPage = () => {
    return(
        <>
            <Box sx={{width: "50vw",
                    height: "100vh",
                    backgroundImage: "linear-gradient(to right, white,black)",
                    float:'left'}}/>

            <Box sx={{width: "50vw",
                    height: "100vh",
                    backgroundColor:"gray",
                    float:'right',
                    display:'flex',
                    flexDirection:'column',
                    gap:'1em',
                    margin: "0 auto"}}>

                <TextField
                    id="outlined-name"
                    label="Email"
                    sx={{border: '1px solid white', width:"300px", margin: "0 auto",}}
                    />

                <TextField
                    id="outlined-name"
                    label="Password"
                    type="password"
                    sx={{border: '1px solid white', width:"300px", margin: "0 auto"}}
                    />  

                <Button variant="contained" sx={{backgroundColor:'red', fontWeight:'bold', width:"300px", margin: "0 auto"}}>Login</Button>

            </Box>
            
        </>
    )
}

export default LoginPage;