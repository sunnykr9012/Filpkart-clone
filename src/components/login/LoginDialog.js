import React, { useContext, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { Box, Button, TextField, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { DataContext } from '../../App';
import { authenticateLogin, authenticateSignup } from '../service/api';

const Component = styled(Box)(({ theme }) => ({
  width: "100vh",
  height: "70vh",
  display: "flex",
  [theme.breakpoints.down('sm')]: {
    width: "55vh",
    overflowX: "hidden"
  }
}));

const Leftbar = styled(Box)(({ theme }) => ({
  width: "40%",
  height: "100%",
  backgroundColor: "#2874f0",
  [theme.breakpoints.down('sm')]: {
    width: "25%",
  }
}));

const Typo = styled(Typography)(({ theme }) => ({
  margin: "40px 10px 0 30px",
  color: "white",
  [theme.breakpoints.down('sm')]: {
    margin: "150px 10px 0 25px",
    fontSize: "20px",
  }
}));

const Typo1 = styled(Typography)(({ theme }) => ({
  margin: "10px 10px 0 30px",
  fontSize: "17px",
  color: "white",
  [theme.breakpoints.down('sm')]: {
    margin: "10px 3px 0 15px",
    fontSize: "14px"
  }
}));

const Rightbar = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "25px 60px 0 60px",
  [theme.breakpoints.down('sm')]: {
    padding: "15px 15px 0 25px",
    width: "45%",
  }
}));

const Text = styled(TextField)(({ theme }) => ({
  marginTop: "15px",
  width: "300px",
  marginBottom: "10px",
  [theme.breakpoints.down('sm')]: {
    width: "170px"
  }
}));

const Buttons = styled(Button)(({ theme }) => ({
  width: "350px",
  marginTop: "20px",
  [theme.breakpoints.down('sm')]: {
    marginLeft: "15px",
    width: "170px"
  }
}));

const Terms = styled(Typography)(({ theme }) => ({
  fontSize: "11px",
  [theme.breakpoints.down('sm')]: {
    width: "180px",
  }
}));

const accountInitialvalues = {
  Login: {
    view: "Login",
    heading: "Login",
    subheading: "Get access to your Orders, Wishlist and Recommendations"
  },
  Signup: {
    view: "Signup",
    heading: "Sign Up",
    subheading: "Sign up with your mobile number to get started"
  }
};

const userInitialValues = {
  Name: "",
  Mobile: "",
  Email: "",
  Password: ""
};

export default function LoginDialog({ open, setopen }) {
  const [account, setaccount] = useState(accountInitialvalues.Login);
  const [userDetails, setuserDetails] = useState(userInitialValues);
  const [validUser, setValidUser] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const { setAccounts } = useContext(DataContext);
  const [login, setLogin] = useState({
    Mobile: "",
    Password: ""
  });

  const handleClose = () => {
    setopen(false);
    setaccount(accountInitialvalues.Login);
    setValidUser(true);
    setValidPassword(true);
  };

  const handleLogin = () => {
    setValidUser(true);
    setaccount(accountInitialvalues.Signup);
  };

  const handleSignup = () => {
    setValidUser(true);
    setaccount(accountInitialvalues.Login);
  };

  const handleChange = (e) => {
    setuserDetails({
      ...userDetails,
      [e.target.name]: e.target.value
    });
  };

  const formSubmit = async () => {
    try {
      const response = await authenticateSignup(userDetails);
      if (response.data === "User exists") {
        setValidUser(false);
      } else {
        handleClose();
        setAccounts(userDetails.Name);
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    try {
      const response = await authenticateLogin(login);
      if (response.data === "User doesn't exist") {
        setValidUser(false);
        setValidPassword(true);
      } else if (response.data === "Wrong password") {
        setValidUser(false);
        setValidPassword(false);
      } else {
        setValidUser(true);
        handleClose();
        setAccounts(response.data.Name);
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const image = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png";
  
  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
      <Component>
        <Leftbar>
          <Typo variant='h5'>{account.heading}</Typo>
          <Typo1 variant='h6'>{account.subheading}</Typo1>
          <img src={image} alt='Login' style={{ margin: "160px 10px 0 37px", width: "200px" }} />
        </Leftbar>
        {account.view === 'Login' ? (
          <Rightbar>
            {validUser ? (
              <>
                <Text label="Enter Mobile number" name="Mobile" onChange={onValueChange} />
                <Text label="Enter Password" name="Password" onChange={onValueChange} />
                <Terms>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Terms>
              </>
            ) : (
              <>
                <Text label="Enter Mobile number" name="Mobile" onChange={onValueChange} />
                <Text label="Enter Password" name="Password" onChange={onValueChange} />
                <Terms>By continuing, you agree to Flipkart's Terms</Terms>
                <Typography style={{ color: "red", fontSize: "15px", textAlign: "center" }}>
                  {validPassword ? "User doesn't exist. Please create an account." : "Wrong password. Please enter correct password and login."}
                </Typography>
              </>
            )}
            <Buttons variant="contained" onClick={loginUser}>LOGIN</Buttons>
            <Typography style={{ margin: "20px 0", textAlign: "center" }}>OR</Typography>
            <Buttons variant="outlined">Request OTP</Buttons>
            <Typography style={{ color: "#2874f0", cursor: "pointer" }} onClick={handleLogin}>New to Flipkart? Create an account</Typography>
          </Rightbar>
        ) : (
          <Rightbar>
            <Text label="Enter Full Name" name='Name' onChange={handleChange} required />
            <Text label="Enter Mobile number" name='Mobile' onChange={handleChange} required />
            <Text label="Enter Email" name='Email' onChange={handleChange} required />
            <Text label="Enter Password" name='Password' onChange={handleChange} required />
            <Terms>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Terms>
            {validUser || <Typography style={{ color: "red", fontSize: "15px", textAlign: "center" }}>User exists. Please login to your account.</Typography>}
            <Buttons variant="contained" onClick={formSubmit}>CONTINUE</Buttons>
            <Buttons variant="outlined" onClick={handleSignup}>Existing User? Log in</Buttons>
          </Rightbar>
        )}
      </Component>
    </Dialog>
  );
}
