

import React, { Component } from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import "../assets/css/App.css";
import Image from '../assets/img/login.jpg';





class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',

      emailValid: false,
      passwordValid: false,

      emailerror: '',
      passerror: '',

     

    }
  }
  handleComp=(n)=>
  {
    
   
    this.props.handleAC(n);

  }

  handleChange = (e) => {
    const name = e.target.name;

    const value = e.target.value;
    
    this.validateField(name, value);


  }

  validateField(fieldName, value) {
    let fieldValidationErrors = {
      email: this.state.emailerror,
      password: this.state.passerror
    };
    
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

        fieldValidationErrors.email = emailValid ? '' : ' should be valid Email';
        if (fieldValidationErrors.email != '')
          fieldValidationErrors.email = "Username " + ' ' + fieldValidationErrors.email;




        break;
      case 'password':
        passwordValid = value.length >= 6;

        fieldValidationErrors.password = passwordValid ? '' : ' is too short';
        if (fieldValidationErrors.password != '')
          fieldValidationErrors.password = "Password " + ' ' + fieldValidationErrors.password;


        break;
      default:
        break;
    }
    this.setState({
      emailerror: fieldValidationErrors.email,
      passerror: fieldValidationErrors.password



    });
  }



  render() {
    const { user } = this.state;
    const paperStyle = { padding: 20, height: 580, width: 470, margin: "20px auto" }
    const paperStyle1 = { padding: 20, height: 580, width: 470, margin: "20px auto", backgroundImage: `url(${Image})` }
    const gridStyle = { padding: 30, width: '45%' }
    const gridStyle1 = { padding: 30, width: '45%' }
    const gridStyle2 = { padding: 30, width: '96%' }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }
    if (this.props.active == "Login")
      return (

        <Grid container className="grid-main" style={gridStyle2} >


          <Grid style={gridStyle}  >
            <Paper elevation={10} style={paperStyle1} >
            </Paper>
          </Grid>

          <Grid style={gridStyle1}>

            <Paper elevation={10} style={paperStyle} className='papereffects'>
              <Grid align='center'>
                <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                <h2>Sign In</h2>
              </Grid>
              <TextField name='email' label="UserName" onChange={(event) => this.handleChange(event)} type='email' placeholder='Enter username' fullWidth required />
              <h6 className='errorfield' >{this.state.emailerror}</h6>
              <TextField name='password' label="Password" onChange={(event) => this.handleChange(event)} placeholder='Enter password' type='password' fullWidth required />
              <h6 className='errorfield'>{this.state.passerror}</h6>
              <FormControlLabel
                control={
                  <Checkbox
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Remember me"
              />
              <Button type='submit' onClick={(event) => this.handleComp("HomePage")} className="addSubmitButton" color='primary' variant="contained" style={btnstyle}  fullWidth>Sign in</Button>
              <Typography >
                <Link href="#" >
                  Forgot password ?
                </Link>
              </Typography>
              <Typography  > Do you have an account ?
                <Link onClick={(event) => this.handleComp("registration")}  >
                  Sign Up
                </Link>
              </Typography>



            </Paper>


          </Grid>


        </Grid>







      )
    return (
      <div></div>
    )
  }
}

export default LoginPage;
