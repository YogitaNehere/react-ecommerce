import axios from "axios";
import React from "react";
import "./Register.scss";
import { CONSTANTS } from "../../utils/constants";
import { useState } from "react";
import { Link } from "@mui/icons-material";

const Register = () => {
    const [state, setState] = useState({
        fullName: "",
        email: "",
        password:"",
        confirmPassword: "",
        error:{
            hasErrors: false,
            errorMsgs: {},
        },
    });

    const onInputChange = (e) => {
        console.log(e.target.value);
        setState({...state, [e.target.id] : e.target.value});
    };

    const validateRegistrationForm = (data) => {
        const errors = [];
        let hasErrors = false;

        if(data.fullName.length === 0 && data.fullName.length > 20){
            errors.fullName = "Full name should be between 1 to 20 characters.";
        }

        hasErrors = Object.keys(errors).length ? true : false;

        setState({
            errors:{
                hasErrors: hasErrors,
                errorMsgs: errors
            }
        });
        return hasErrors;
    }

    const onFileInput = (e) => {
        console.log(e.target.files);
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            console.log(reader.result); //base64 
        }
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        const formData = state;
        //Validations
        // const hasErrors = validateRegistrationForm(formData);
        axios
            .post(CONSTANTS.API_BASE_URL+'users')
            .then((response) => {
                console.log(response.data);
                setState({
                    ...state, 
                    fullName: "",
                    email: "",
                    password:"",
                    confirmPassword: "",
                    error:{
                        hasErrors: false,
                        errorMsgs: {},
                    },
                });
                alert('Regiration completed successfully, please login to continue');

            })
            .catch((error) => {
                console.log(error);
            });

            // Call User Registraion REST API
            console.log("Form submiited", this.state);
    }

    return(
        <div className="container register_container">
            <div className="row">
                <div className="col">

                    {/* <!-- Breadcrumbs --> */}

                    <div className="breadcrumbs d-flex flex-row align-items-center">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li className="active"><Link to="/contact-us"><i className="fa fa-angle-right" aria-hidden="true"></i>Contact</Link></li>
                        </ul>
                    </div>

                </div>
            </div>
            {/* <!-- Contact Us --> */}
            <div className="row">
                <div className="col-lg-6 get_in_touch_col">
                    <div className="get_in_touch_contents">
                    <div>
                        <h2>Register Here</h2>
                        <form onSubmit={onFormSubmit} className="registration-form">
                            <div>
                                <label htmlFor="fullName">Full Name</label>
                                <input value={state.fullName} onChange={onInputChange} id='fullName' type='text' />
                                {/* { this.state.errors.fullName } */}
                                <span className="error" id="error_fullName"></span>
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input value={state.email} onChange={onInputChange} id='email' type='email' />
                            </div>
                            <div>
                                <label htmlFor="dob">DOB</label>
                                <input value={state.date} onChange={onInputChange} id='date' type='date' />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input value={state.password} onChange={onInputChange} id='password' type='password' />
                            </div>
                            <div>
                                <label htmlFor="confirmPassword">Confirm password</label>
                                <input value={state.confirmPassword} onChange={onInputChange} id='confirmPassword' type='password' />
                            </div>
                            <div>
                                <label htmlFor="picture">Upload Picture</label>
                                <input type="file" onChange={onFileInput} id="picture" />
                            </div>

                            <input type="submit" />
                        </form>
                    </div>


                    </div>
                </div>
                <div className="col-lg-6 contact_col">
                    
                </div>

            </div>
        </div>
        
    );
}

export default Register;