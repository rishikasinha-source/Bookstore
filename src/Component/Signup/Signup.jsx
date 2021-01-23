import React from 'react'
import './Signup.css'
import { Button, TextField, Checkbox } from '@material-ui/core';
import Service from '../../Service/userService.js';
import { Link } from 'react-router-dom'


const service = new Service();

const validNameRegex = RegExp(/^[A-Z]{1}[a-zA-z\s]{2,}$/i);
const validEmailRegex = RegExp( /[a-zA-Z]{1,}([.\-+]?[a-zA-Z0-9]+)?@[a-z0-9]{1,}\.([a-z]{2,4})(\.[a-z]{2,4})?$/i);
const validPasswordRegex = RegExp(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?!(?:.*[!@#$%^&*]){2})[a-zA-Z0-9!@#$%^&*]{8,}$/i);
const validPhoneNumberRegex = RegExp(/^(\+\d{1,3}[- ]?)?\d{10}$/);

export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            email: '',
            password: '',
            confirm: '',
            phoneNumber: '',
            hidden: true,
            fullNameFlag: false,
            emailFlag: false,
            passwordFlag: false,
            confirmFlag: false,
            phoneNumberFlag: false,
            fullNameError: '',
            emailError: '',
            passwordError: '',
            confirmError: '',
            phoneNumberError: '',
        };
        this.toggleShow = this.toggleShow.bind(this);
        this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
        this.togglePassword = this.togglePassword.bind(this);
        this. handleChangePassword = this. handleChangePassword.bind(this) ;
    }


    handleChange = (e) => {
        e.preventDefault();
        const{ name, value } = e.target;
        this.setState({[name]:value})
    }

    validate = () => {
        let isValid = false
        if (this.state.fullName === '') {
            this.setState({
                fullNameError: 'Full Name is required',
                fullNameFlag: true
            })
            isValid = true;
        }
        else {
            if (!validNameRegex.test(this.state.fullName)) {
                this.setState({
                    fullNameError: 'Invalid FullName',
                    fulltNameFlag: true
                })
                isValid = true;
            }
        }

        if (this.state.email === '') {
            this.setState({
                emailError: 'Email is required',
                emailFlag: true
            })
            isValid = true;
        }
        else {
            if (!validEmailRegex.test(this.state.email)) {
                this.setState({
                    emailError: 'Invalid email!!',
                    emailFlag: true
                })
                isValid = true;
            }
        }

        if (this.state.password === '') {
            this.setState({
                passwordError: 'Password is required!',
                passwordFlag: true
            })
            isValid = true;
        }
        else {
            if (!validPasswordRegex.test(this.state.password)) {
                this.setState({
                    passwordError: 'Invalid password!!',
                    passwordFlag: true
                })
                isValid = true;
            }
        }

        if (this.state.confirm === '') {
            this.setState({
                confirmError: 'Confirmation required!!',
                confirmFlag: true
            })
            isValid = true;
        }
        else {
            if (this.state.password !== this.state.confirm) {
                this.setState({
                    confirmError: "Password didn't match!!",
                    confirmFlag: true
                })
                isValid = true;
            }
        }
        if (this.state.phoneNumber === '') {
            this.setState({
                phoneNumberError: 'Phone Number is required!!',
                phoneNumberFlag: true
            })
            isValid = true;
        }
        else {
            if (!validPhoneNumberRegex.test(this.state.phoneNumber)) {
                this.setState({
                    phoneNumberError: 'Invalid Phone number!!',
                    phoneNumberFlag: true
                })
            
                isValid = true;
            }
        }
        return isValid;
    }

    handleSubmit = e => {
        e.preventDefault();
            if(this.validate()) {
                console.log('signup failed');
            }
            else {
                console.log('signup successful');
                let userdata= { "fullName":this.state.fullName, "email":this.state.email, "service":"advance", "password" : this.state.password, "PhoneNumber": this.state.phoneNumber}
                service.signup(userdata).then(response => {
                    console.log(response)
                }).catch(error => {
                    console.log(error)
                })
            }
    };
        

    toggleShow = () => {
        this.setState({ hidden: !this.state.hidden });
    }

    render() {
        return (
            <div className="Content">
                <div className='content-head'>
                    <div>
                        <h1> Book Store </h1>
                    </div>
                    <div>Create your Book store Account</div>
                </div>
                <form className='form'  >
                    <div className="row-content">
                        <TextField className='mr'
                            size='small'
                            fullWidth
                            name='fullName'
                            label="Full name"
                            margin="normal"
                            variant="outlined"
                            error={this.state.fullNameFlag}
                            helperText={this.state.fullNameError}
                            value={this.state.fullName}
                            onChange={this.handleChange} noValidate
                        />
                    </div>
                    <div className='mailid' >
                        <TextField name='email'
                            noValidate
                            size='small'
                            label="Email Id"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleChange}
                            error={this.state.emailFlag}
                            helperText={this.state.emailError}
                            value={this.state.email}
                        />
                    </div>
                    <div className='mailid'>
                    <TextField name='Phone number'
                            noValidate
                            fullWidth
                            size='small'
                            label="Phone Number"
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleChange}
                            error={this.state.phoneNumberFlag}
                            helperText={this.state.phoneNumberError}
                            value={this.state.phoneNumber}
                        />
                        </div>
                    <div className="row">
                        <TextField className='a1'
                            type={this.state.hidden ? 'password' : 'text'}
                            name='password'
                            noValidate
                            size='small'
                            fullWidth
                            label="Password"
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleChange}
                            error={this.state.passwordFlag}
                            helperText={this.state.passwordError}
                            value={this.state.password}
                        />
                        <TextField
                            type={this.state.hidden ? 'password' : 'text'}
                            name='confirm'
                            noValidate
                            fullWidth
                            size='small'
                            label="Confirm"
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleChange}
                            error={this.state.confirmFlag}
                            helperText={this.state.confirmError}
                            value={this.state.confirm}
                        />
                    </div>
                    <div className="show">
                        <Checkbox color="primary" onClick={this.toggleShow} />
                        <span>Show password</span>
                    </div>
                    <div className='button-Content'>
                        <Button component={Link} to="/signin" color="primary" >Sign in instead</Button>
                        <div>
                            <Button variant="contained" color="primary" onClick={this.handleSubmit}>Sign Up</Button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}