import React from "react";
import { useState } from "react";
import { TextField, Typography } from "@mui/material";
import { Button, FormLabel, Stack } from "react-bootstrap";
import { Box } from "@mui/system";

const FormLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorEmailMessage, setErrorEmailMessage] = useState("");
    const [errorPasswordMessage, setErrorPasswordMessage] = useState("");

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }
    const handleClick = () => {
        const reEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const rePassword = /^([A-Z]){1}([\w_!@#$%^&*()]+){5,31}$/;
        // console.log(email.match(re));
        
        // if(!email){
        //     setErrorEmailMessage('Required email');}
        // }else if(!email.match(reEmail)){
        //     setErrorEmailMessage('Wrong fomat');
        // }else if(email.match(reEmail)){
        //     setErrorEmailMessage("");
        // }else{
        //     alert("Successfully")

        const checkEmail = (!email.match(reEmail)) ? setErrorEmailMessage('Wrong fomat') : setErrorEmailMessage("")
        const checkPassword = (!password.match(rePassword)) ? setErrorPasswordMessage('Wrong fomat') : setErrorPasswordMessage("")

        if(email.match(reEmail) && password.match(rePassword)){
            alert("Successfully");
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
                        <FormLabel style={{color: 'red', textAlign: 'left'}}>{errorEmailMessage}</FormLabel>

                    <TextField  sx={{display: 'block'}}
                        fullWidth
                        label={"Password"}
                        value={password}
                        onChange={(event) => {handleChangePassword(event)}}/>
                        <FormLabel style={{color: 'red', textAlign: 'left'}}>{errorPasswordMessage}</FormLabel>

                    <Button onClick={() => handleClick()}>Log in</Button>
                </Box>
            </Stack>
        </Stack>
    );
}
export default FormLogin;