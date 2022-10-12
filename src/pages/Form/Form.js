import React from 'react'
import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { OutlinedInput } from '@mui/material';
import { TextField } from '@mui/material';

const Form = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    // console.log(email, password)
    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }
    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleClickButton = () => {
        //validate
        if(!email){
            alert("Email trong");
            return;
        }
        if(!password){
            alert("Mat khau trong");
            return;
        }
        alert("Dang nhap thanh cong")
        
    }
    

    return (
        <>
            <h1>Log in</h1>
            <div>
                <label>Email</label> <br />
                <input type={"text"} placeholder={"Nhập Email hoặc số điện thoại"} value={email}
                    onChange={(event) => {
                        handleChangeEmail(event)}
                    }
                />
            </div>
            <div>
                <label>Mật khẩu</label> <br />
                <input type={"password"} placeholder={"Password"} value={password}
                    onChange={(event) => {
                        handleChangePassword(event)}
                    }
                />
            </div>
            <div>
                <button onClick={() => handleClickButton()}>Log in</button>
            </div>

            {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}

            
        </>
    )
}
export default Form;