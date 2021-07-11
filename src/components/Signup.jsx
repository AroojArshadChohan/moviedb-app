import React, { Component } from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Label } from '@material-ui/icons';
import Image from '../assets/img/signup.jpg';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmpassword: '',
            firstname: '',
            lastname: '',
            phone: '',

            emailValid: false,
            passwordValid: false,
            confirmpassValid: false,
            fnValid: false,
            lnValid: false,
            phoneValid: false,


            emailerror: '',
            passerror: '',
            confirmpasserror: '',
            fnerror: '',
            lnerror: '',
            phoneerror: '',

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
            password: this.state.passerror,
            confirmpassword: this.state.confirmpasserror,
            firstname: this.state.fnerror,
            lastname: this.state.lnerror,
            phone: this.state.phoneerror
        };
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let confirmpassValid = this.state.confirmpassValid;
        let fnValid = this.state.fnValid;
        let lnValid = this.state.lnValid;
        let phoneValid = this.state.phoneValid;

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
                    else
                    this.state.password=value;
                break;

            case 'confirmpassword':
                confirmpassValid = value.match(this.state.password);
               
                fieldValidationErrors.confirmpassword = confirmpassValid ? '' : ' should be match ';
                if (fieldValidationErrors.confirmpassword != '')
                    fieldValidationErrors.confirmpassword = "Both Password " + ' ' + fieldValidationErrors.confirmpassword;

                break;

            case 'firstname':
                fnValid = value.length >= 1;

                fieldValidationErrors.firstname = fnValid ? '' : ' cant be empty';
                if (fieldValidationErrors.firstname != '')
                    fieldValidationErrors.firstname = "FirstName " + ' ' + fieldValidationErrors.firstname;
                break;

            case 'lastname':
                lnValid = value.length >= 1;

                fieldValidationErrors.lastname = lnValid ? '' : ' cant be empty';
                if (fieldValidationErrors.lastname != '')
                    fieldValidationErrors.lastname = "Username " + ' ' + fieldValidationErrors.lastname;

                break;
            case 'phone':
                phoneValid = value.match(/^[0-9]*$/);

                fieldValidationErrors.phone = phoneValid ? '' : 'can only be number';
                if (fieldValidationErrors.phone != '')
                    fieldValidationErrors.phone = "Phone Number " + ' ' + fieldValidationErrors.phone;
                break;

            default:
                break;
        }
        this.setState({
            emailerror: fieldValidationErrors.email,
            passerror: fieldValidationErrors.password,
            confirmpasserror: fieldValidationErrors.confirmpassword,
            fnerror: fieldValidationErrors.firstname,
            lnerror: fieldValidationErrors.lastname,
            phoneerror: fieldValidationErrors.phone


        });
    }

    render() {
        const paperStyle = { padding: '30px 20px', width: 480, margin: "20px auto" }
        const headerStyle = { margin: 0 }
        const gridStyle = { backgroundImage: `url(${Image})`, backgroundRepeat: "no-repeat"}
        const avatarStyle = { backgroundColor: '#1bbd7e' }
        const marginTop = { marginTop: 5 }
        if (this.props.active == "registration")
            return (
                <Grid className="grid-main" style={gridStyle}>
                    <Paper elevation={20} style={paperStyle} className='papereffects'>
                        <Grid align='center'>
                            <Avatar style={avatarStyle}>
                                <AddCircleOutlineOutlinedIcon />
                            </Avatar>
                            <h2 style={headerStyle}>Sign Up</h2>
                            <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                        </Grid>
                        <form>
                            <TextField fullWidth name='email' label='Email*' onChange={(event) => this.handleChange(event)} placeholder="Enter your email" />
                            <h6 className='errorfield'>{this.state.emailerror}</h6>
                            <TextField fullWidth name='password' label='Password*' onChange={(event) => this.handleChange(event)} placeholder="Enter your password" />
                            <h6 className='errorfield'>{this.state.passerror}</h6>
                            <TextField fullWidth name='confirmpassword' label='Confirm Password*' onChange={(event) => this.handleChange(event)} placeholder="Confirm your password" />
                            <h6 className='errorfield'>{this.state.confirmpasserror}</h6>
                            <TextField fullWidth name='firstname' label='First Name*' onChange={(event) => this.handleChange(event)} placeholder="Enter your Firts Name" />
                            <h6 className='errorfield'>{this.state.fnerror}</h6>
                            <TextField fullWidth label='Middle Name' placeholder="Enter your Middle Name" />
                            <TextField fullWidth name='lastname' label='Last Name*' onChange={(event) => this.handleChange(event)} placeholder="Enter your Last Name" />
                            <h6 className='errorfield'>{this.state.lnerror}</h6>
                            <FormControl component="fieldset" style={marginTop}>
                                <FormLabel component="legend">Gender</FormLabel>
                                <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                </RadioGroup>
                            </FormControl>
                            <TextField fullWidth name='phone' label='Phone Number' onChange={(event) => this.handleChange(event)} placeholder="Enter your phone number" />
                            <h6 className='errorfield'>{this.state.phoneerror}</h6>
                            <Typography variant='subtitle1' gutterBottom>Date of Birth</Typography>
                            <TextField type="date" fullWidth />
                            <TextField fullWidth label='Address' placeholder="Enter your full address" />

                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="I accept the terms and conditions."
                            />
                            <Button type='submit' className="addSubmitButton" onClick={(event) => this.handleComp("HomePage")} variant='contained' color='primary'>Sign up</Button>
                        </form>
                    </Paper>
                </Grid>
            )
        return (
            <div></div>
        )
    }
}

export default Signup;
/*

dateOfBirth
:
"21/11/1963"

*/