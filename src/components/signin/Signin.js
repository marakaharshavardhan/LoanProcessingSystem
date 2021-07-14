
import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useHistory } from 'react-router';

const Signup = () => {

    let history=useHistory();
    const [userName, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");
   
const doSignup=()=>{
    console.log(userName,password,"----")

   history.push('/Account');
}

    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    return (
    
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                       
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
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
                    <TextField fullWidth label='Phone Number' placeholder="Enter your phone number"   />
                    <TextField fullWidth label='Password' placeholder="Enter your password"  />
                    <TextField fullWidth label='Confirm Password' placeholder="Confirm your password"  />
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button type='submit' variant='contained' onClick={doSignup} color='primary'>Sign up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;







// import React from 'react';
// import './Signin.css';
// import { useHistory } from 'react-router';

// export default function Signin() {
//     let history=useHistory();
//     const [firstName, setFirstName] = React.useState("");
//     const [lastName, setLastName] = React.useState("");
//     const [PhoneNumber, setPhoneNumber] = React.useState("");
//     const [EmailId, setEmailId] = React.useState("");
//     const [Age, setAge] = React.useState("");
//     const [Gender, setGender] = React.useState("");
//     const [PanNumber, setPanNumber] = React.useState("");
//     const [AadharNumber, setAadharNumber] = React.useState("");
//     const [Education, setEducation] = React.useState("");
//     const [State, setState] = React.useState("");
//     const [Address, setAddress] = React.useState("");




// const doLogin =()=>{
//      console.log(firstName,lastName,"----")
//      localStorage.setItem("firstName", firstName)
//      localStorage.setItem("lastName", lastName)
//      localStorage.setItem("PhoneNumber", PhoneNumber)
//      localStorage.setItem("EmailId", EmailId)
//      localStorage.setItem("Age", Age)
//      localStorage.setItem("Gender", Gender)
//      localStorage.setItem("PanNumber", PanNumber)
//      localStorage.setItem("AadharNumber", AadharNumber)
//      localStorage.setItem("Education ",Education )
//      localStorage.setItem("State", State)
//      localStorage.setItem("Address", Address)
    
//     history.push('/Account');
// }

//  return (
//      <div>
//      <h1>create your accounts by filling the form </h1>
//         <div className="innerdiv" >
//         <table>
//         <tr>
//         <label className="label"><strong>first name</strong></label>
//         <th>
//         <input  className="inputbox" type="text" placeholder="enter first Name"></input>
//         </th>
//         </tr>
//         <tr>
//         <label className="label"><strong>last name</strong></label>
//         <th>
//         <input className="inputbox" type="text" placeholder="enter Last Name"></input>
//         </th>
//         </tr>
//         <tr>
//         <label className="label"><strong>Phone Number</strong></label>
//         <th>
//         <input className="inputbox" type="Number" placeholder="enter Phone number"></input>
//         </th>
//         </tr>
//         <tr>
//         <label className="label"><strong>Email Id</strong></label>
//         <th>
//         <input className="inputbox" type="text" placeholder="enter Email Id"></input>
//         </th>
//         </tr>
//         <tr>
//         <label className="label"><strong>Age</strong></label>
//         <th>
//         <input className="inputbox" type="number" placeholder="enter age"></input>
//         </th>
//         </tr>
//         <tr>
//         <label className="label"><strong>Gender</strong></label>
//         <th>
//         <input type="radio" name="a" value="male"></input>
//         <input type="radio" name="a" value="male"></input>
//         <input type="radio" name="a" value="male"></input>
//         </th>
//         </tr>
//         <tr>
//         <label className="label"><strong>Aadhar number</strong></label>
//         <th>
//         <input className="inputbox" type="text" placeholder="enter Adhar Number"></input>
//         </th>
//         </tr>
//         <tr>
//         <label className="label"><strong>Pan number</strong></label>
//         <th>
//         <input className="inputbox" type="text" placeholder="enter Pan number"></input>
//         </th>
//         </tr>
//         <tr>
//         <label className="label"><strong>Education</strong></label>
//         <th>
//         <input type="text" placeholder="enter education"></input>
//         </th>
//         </tr>
//         <tr>
//         <label className="label"><strong>State</strong></label>
//         <th>
//         <input className="inputbox" type="text" placeholder="enter state"></input>
//         </th>
//         </tr>
//         <tr>
//         <label className="label"><strong>Address</strong></label>
//         <th>
//         <textarea type="text" placeholder="enter Address"></textarea>
//         </th>
//         </tr>
//         </table>
//         </div>
//         <button  className="bb" type="submit" onClick={doLogin}>submit</button>
//         </div>
//     )
// }
