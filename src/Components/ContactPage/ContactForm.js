import { FormControl, TextField, Input, Button, Grid } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
const ContactForm = () => {


    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        console.log("called", form.current);

        emailjs.sendForm('portfolio', 'template_2mvxrrj', form.current, '7c0LITzZ4zNhpSsQ_')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <Grid container>
            <Grid item>
                <form ref={form} onSubmit={sendEmail}>
                    <Grid item xs="12">
                        <TextField
                            required
                            label="Email"
                            name="from_email"
                            placeholder="Enter your Email Address"
                            sx={{
                                mb: 3
                            }}
                            InputProps={{
                                startAdornment: (<EmailIcon />)
                            }}
                        />

                    </Grid>

                    <Grid item xs="12">

                    <TextField
                        required
                        label="Name"
                        name="from_name"
                        placeholder="Your name"
                        sx={{
                            mb: 5
                        }}
                        InputProps={{
                            startAdornment: (<EmailIcon />)
                        }}
                    />
                    </Grid>

                    <Grid item xs="12">
                    <TextField
                        required
                        label="Topic"
                        name="subject"
                        placeholder="Topic"
                        sx={{
                            mb: 5
                        }}
                        InputProps={{
                            startAdornment: (<EmailIcon />)
                        }}
                    />


                    </Grid>
                    <TextField
                        required
                        label="Content"
                        name="message"
                        multiline
                        minRows={5}
                        sx={{
                            mb: 5,
                            minWidth: "20vw"
                        }}
                        placeholder="Email Contents"
                        InputProps={{
                            startAdornment: (<EmailIcon />)
                        }}
                    />


                    
                    <Grid item xs="12">

                    </Grid>
                    <Grid item xs="12">
                    <Button variant="outlined" type="submit">
                        Send
                    </Button>
                    </Grid>
                                        
                </form>

            </Grid>

        </Grid>
    )
}

export default ContactForm;