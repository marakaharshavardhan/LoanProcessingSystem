import React from 'react'
import Account from '../account/Account';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useHistory } from 'react-router';
import { ToastContainer,Toast, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
function Transcations()  {

const diffToast=() => {
    toast.success("no previous transcations",{
        position:"top-center"
    });
   
}

function sweetalertclick(){
    Swal('heloo ');
}

    
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    return (
        <div>
        <Account />
        <h1 >Please fill this transcation form !!!</h1>
            <Grid>
                <Paper elevation={20} style={paperStyle}>
                    <Grid align='center'>
                       
                
                        <Typography variant='caption' gutterBottom> transcation form !!</Typography>
                    </Grid>
                    <form>
                        <TextField fullWidth label='Name' placeholder="Enter your name"   />
                        <TextField fullWidth label='Email' placeholder="Enter your email"   />
                        <FormControl component="fieldset" style={marginTop}>
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                            </RadioGroup>
                        </FormControl>
                        <TextField fullWidth label='CardNumber' placeholder="Enter your card number"   />
                        <TextField fullWidth label='Password' placeholder="Enter your password"  />
                        <TextField fullWidth label='Confirm Password' placeholder="Confirm your password"  />
                
                        <FormControlLabel
                            control={<Checkbox name="checkedA" />}
                            label="I accept the terms and conditions."  />
                        <Button id="alert-success" type='submit' variant='contained' color='primary'  onSubmit={sweetalertclick}>Details</Button>
                    </form>
                </Paper>
           
                </Grid>
                <ToastContainer />
        </div>
    )
}

export default Transcations

