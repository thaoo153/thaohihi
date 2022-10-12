import React from "react";
import { useState } from "react";
import { TextField, Typography } from "@mui/material";
import { Button, Stack } from "react-bootstrap";
import { Box } from "@mui/system";

const FormLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }
    const handleClick = () => {
        const reEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const rePassword = /^([A-Z]){1}([\w_!@#$%^&*()]+){5,31}$/;
        const error = '';
        // console.log(email.match(re));
        
        if(!email){
            alert("Required email");
            error.email = "khudswxi";
        }else if(!email.match(reEmail)){
            alert("Wrong fomat")
            return
        }
        if(!password){
            alert("Required password")
        }else if(!password.match(rePassword)){
            alert("Nhập password tối thiểu 6 kí tự không dấu và viết hoa chữ cái đầu")
        }else{
            alert("Successfully")
        }
    }
    

    return(
        <Stack style={{
            height: '600px',
            maxWidth: '1280px',
            background: 'url(https://img.freepik.com/premium-vector/abstract-neon-wall-background-nice-midnight-dj-club-wallpaper_107575-244.jpg?w=2000)',
            backgroundSize: 'contain',
            backgroundPosition: 'top',
            // background: 'cover'
        }}>
            <Stack style={{background: ''}}>
                <Box sx={{
                    background: 'white',
                    borderRadius: '10px',
                    padding: '50px 30px',
                    width: '300px',
                    textAlign: "center",
                    margin: 'auto',
                    display: 'grid',
                    rowGap: '20px'}}>
                <Typography variant="h2" textAlign={"center"} sx={{fontFamily: 'sans-serif'}}>Log in</Typography>
                    
                    <TextField sx={{display: 'block'}}
                        label={"Email or phone number"} 
                        // helperText="Please enter your name"
                        fullWidth
                        value={email} 
                        onChange={(event) => {handleChangeEmail(event)}}/>
                    <TextField  sx={{display: 'block'}}
                        fullWidth
                        label={"Password"}
                        value={password}
                        onChange={(event) => {handleChangePassword(event)}}/>
                    <Button onClick={() => handleClick()}>Log in</Button>
                </Box>
            </Stack>
        </Stack>
    );
}
export default FormLogin;