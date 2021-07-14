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
import Swal from 'sweetalert2';
import Header from '../header';
function Payloan()  {
   
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
     
function sweetalertclick(){
    Swal('heloo ');
} 

    return (
        <div>
        <Header />
        <h1>Please fill the Pay Loan form !</h1>
            <Grid>
                <Paper elevation={20} style={paperStyle}>
                    <Grid align='center'>
                       
                
                        <Typography variant='caption' gutterBottom> Pay Loan form !</Typography>
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
                        <TextField fullWidth label='Ammount' placeholder="enter your amount"  />
                        <FormControlLabel
                            control={<Checkbox name="checkedA" />}
                            label="I accept the terms and conditions."  />
                        <Button type='submit' variant='contained' color='primary' onClick={alert}n>Pay</Button>
                    </form>
                </Paper>
            </Grid>
        </div>
    )
}



export default Payloan
