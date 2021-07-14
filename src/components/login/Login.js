import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  Box,
} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useHistory } from "react-router";
import Header from "../header";
function Login() {
  let history = useHistory();
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [userNameError, setUserNameError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");


  const [isSubmit, setIsSubmit] = React.useState(false);

  const doLogin = () => {
    if(!validateForm()) {
        return null;
    }
    localStorage.setItem("userName", userName);
    localStorage.setItem("password", password);
    setIsSubmit(true);
    setTimeout(() => history.push("/Account"), 3000);
  };

  const validateForm = () => {
    let validated = true;
    if(userName === "") {
        validated = false;
        setUserNameError("Enter userName.");
    }
    if(password === "") {
        validated = false;
        setPasswordError("Enter password.");
    } else if(password.length < 8) {
        validated = false;
        setPasswordError("Password should contain minimum 8 characters.");
    }
    return validated;
  }
  const paperStyle = {
    padding: 40,
    width: "30%",
    margin: "20px auto",
  };
  const errorStyle = {
    height: "20px",
    color: "red",
    margin: "3px 0",
    padding: 0,
    textAlign: "start"
  }
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  return (
    <div>
      <Header />

      <Grid>
        <Paper elevation={10} style={paperStyle}>
        {!isSubmit ? 
          <>
            <Grid align="center">
              <h2>Sign In</h2>
            </Grid>
            <TextField
              label="Username"
              placeholder="Enter username"
              type="[A-Z]{1}[a-z]{7}"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              fullWidth
              required
            />
            <p style={errorStyle}>{userNameError}</p>
            <TextField
              label="Password"
              placeholder="Enter password"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              fullWidth
              required
            />
            <p style={errorStyle}>{passwordError}</p>
            <FormControlLabel
              control={<Checkbox name="checkedB" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btnstyle}
              onClick={doLogin}
              fullWidth
            >
              Sign in
            </Button>
            <Typography>
              <Link href="ForgotPassword">Forgot password ?</Link>
            </Typography>
            <Typography>
              Do you have an account?
              <Link href="signin">Sign Up</Link>
            </Typography>
          </>
        : <Box>
                Submitted Successfully!
            </Box>}
        </Paper>
      </Grid>
    </div>
  );
}

export default Login;
