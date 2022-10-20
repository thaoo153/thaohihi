import { Typography } from "@mui/material";
import React from "react";
import { Button, Stack } from "@mui/material";
import { Image } from "react-bootstrap";
import "./index.css"
// import Logo from "/imgs/Reallogo.png"

const Real = () => (
    <Stack>
        <Stack margin={'10px'} spacing={2} direction="row" sx={{
            textAlign: 'center',
            justifyContent: "space-between",
            borderBottom: '1px solid silver',
            display: "flex",
            alignItems: 'center',
            paddingBottom: '10px'
        }}>
            {/* <Typography className="realing" fontFamily={"cursive"} fontSize={"40px"}>Realing</Typography> */}
            <Stack sx={{ display: 'inline', gap: '10px' }}>
                <Button variant="contained" background="blue" href="/login">Log in</Button>
                <Button variant="outlined" href="/signup">Sign up</Button>
            </Stack>

        </Stack>
        <Stack>
            <Image src="imgs/bannerreal.png" />
        </Stack>
    </Stack>
)
export default Real;