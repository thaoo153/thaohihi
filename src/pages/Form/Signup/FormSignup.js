import React from "react";
import { useState } from "react";
import { TextField, Typography } from "@mui/material";
import { FormLabel, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import Button, { ButtonProps } from '@mui/material/Button';
import { green, purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';


const FormLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [errorUserNameMessage, setErrorUserNameMessage] = useState("");
    const [errorEmailMessage, setErrorEmailMessage] = useState("");
    const [errorPasswordMessage, setErrorPasswordMessage] = useState("");

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }
    const handleChangeUserName = (event) => {
        setUserName(event.target.value);
    }

    const handleClick = () => {
        const reName = /^[a-z0-9_-]{3,16}$/;
        const reEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const rePassword = /^([A-Z]){1}([\w_!@#$%^&*()]+){5,31}$/;
        // console.log(email.match(re));
        
        if(!email){
            setErrorEmailMessage("Email cannot be empty")
        }else if(!email.match(reEmail)){
            setErrorEmailMessage("Wrong format")
        }else(
            setErrorEmailMessage("")
        )
        if(!password){
            setErrorPasswordMessage("Password cannot be empty")
        }else if(!password.match(rePassword)){
            setErrorPasswordMessage("Wrong format")
        }else{
            setErrorPasswordMessage("")
        }
        if(!userName){
            setErrorUserNameMessage("Username cannot be empty")
        }else if(!userName.match(reName)){
            setErrorUserNameMessage("Wrong format")
        }else{
            setErrorUserNameMessage("")
        }
        

        if(email.match(reEmail) && password.match(rePassword && userName.match(reName))){
            alert("Successfully");
        }
    }
    

    return(

        <Stack style={{
            maxWidth: '1280px',
            background: 'url(https://img.freepik.com/premium-vector/abstract-neon-wall-background-nice-midnight-dj-club-wallpaper_107575-244.jpg?w=2000)',
            backgroundSize: 'contain',
            backgroundPosition: 'top',
            backgroundSize: 'cover'
        }}>
            <Stack spacing={2} direction="row" sx={{textAlign: 'center'}}>
                <Button variant="contained" background="blue" href="/login">Log in</Button>
            </Stack>
            <Stack style={{background: ''}}>
                <Box sx={{
                    background: 'white',
                    borderRadius: '10px',
                    padding: '50px 30px',
                    width: '350px',
                    textAlign: "center",
                    margin: 'auto',
                    display: 'grid',
                    rowGap: '20px'}}>
                <Typography variant="h2" textAlign={"center"} sx={{fontFamily: 'sans-serif'}}>Sign up</Typography>
                    
                    <TextField 
                        label={"Username"}
                        onChange={(name) => {handleChangeUserName(name)}}
                    />
                    <FormLabel style={{color: 'red', textAlign: 'left'}}>{errorUserNameMessage}</FormLabel>

                    <TextField sx={{display: 'block'}}
                        label={"Email or password"} 
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

                    <CreatButton variant="contained" onClick={() => handleClick()}>Eegister</CreatButton>
                    <Link href='/login' className="">Already have an account?</Link>
                </Box>
            </Stack>
        </Stack>
    );
}

const CreatButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
      color: 'white'
    },
  }));
  
export default FormLogin;