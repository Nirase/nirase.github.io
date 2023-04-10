import { FormControl, TextField, Input, Button } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import { useState } from "react";
const ContactForm = () => {

    const [loggedIn, setLoggedIn] = useState(false);
    
    const toggle = () => setLoggedIn(!loggedIn);
    return (
        <FormControl>
            <TextField
                required
                label="Email"
                placeholder="Enter your Email Address"
                sx={{
                    mb:5
                }}
                InputProps={{
                    startAdornment: (<EmailIcon />)
                }}
            />

            <TextField
                required
                label="Name"
                placeholder="Your name"
                sx={{
                    mb:5
                }}
                InputProps={{
                    startAdornment: (<EmailIcon />)
                }}
            />

            <TextField
                required
                label="Topic"
                placeholder="Topic"
                sx={{
                    mb:5
                }}
                InputProps={{
                    startAdornment: (<EmailIcon />)
                }}
            />

            <TextField
                required
                label="Content"
                multiline
                minRows={5}
                sx={{
                    mb:5,
                    minWidth: "20vw"
                }}
                placeholder="Email Contents"
                InputProps={{
                    startAdornment: (<EmailIcon />)
                }}
            />

            <Button variant="outlined">
                Send
            </Button>
            
            {loggedIn ? 
            <button onClick={toggle}>Log in</button> :
            <button onClick={toggle}>Log out</button>
        }
        </FormControl>
    )
}

export default ContactForm;