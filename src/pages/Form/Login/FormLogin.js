import React from "react";
import { useState } from "react";
import { TextField, Typography } from "@mui/material";
import { FormLabel, Stack } from "@mui/material";
import { Box } from "@mui/system";
import './index.css'
import { green, purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';


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
        // const checkEmail = (!email.match(reEmail)) ? setErrorEmailMessage('Wrong fomat') : setErrorEmailMessage("")
        // const checkPassword = (!password.match(rePassword)) ? setErrorPasswordMessage('Wrong fomat') : setErrorPasswordMessage("")

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
            <Stack spacing={2} direction="row" sx={{textAlign: 'center'}}>
                <Button variant="outlined" href="/signup" sx={{color: 'white'}}>Sign up</Button>
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

                    <Button variant="contained" onClick={() => handleClick()}>Log in</Button>
                    <Typography className="or">or</Typography>
                    <CreatButton background='red' href="/signup">Create new account</CreatButton>
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
