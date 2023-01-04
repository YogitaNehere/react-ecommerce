import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CONSTANTS } from "../../utils/constants";
import "./Login.scss"; 
import jwtDecode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, userData } from "../../actions/userActions";
import loaderImg from "../../assets/images/loader.gif";

const Login = () => {
    const [state, setState] = useState({
        username: '',
        password: '',
        showLoader: false
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);

    const onInputChange = (e) => {
        console.log(e.target.id);
        setState({
            ...state,
            [e.target.id]: e.target.value
        });
    }
    if(user.isLoggedIn){
        navigate("/");
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        setState({
            ...state,
            showLoader:true
        });
        const formData = state;
        // console.log(formData);
        axios
        .post(CONSTANTS.API_BASE_URL+"auth/login", formData)
        .then((res) => {
            setState({...state, showLoader: false})
            console.log(res.data);
            const tokenData = jwtDecode(res.data.token);
            localStorage.setItem("csToken", res.data.token);
            
            dispatch(loginUser());
            dispatch(userData(tokenData));

        })
        .catch((error) => {
            setState({...state, showLoader: false})
            // console.log(error)
        });

    }
    return (
        <div className="container login_page_container">
            <div className="row">
                <div className="col">
                    <div className="breadcrumbs d-flex flex-row align-items-center">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li className="active"><Link><i className="fa fa-angle-right" aria-hidden="true"></i>Sign In </Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="login-container">
                <form onSubmit={onFormSubmit}>
                
                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="username">Username</label>
                    <input type="username" onChange={onInputChange} id="username" className="form-control" placeholder="Username"/>
                    {/*  */}
                </div>

                
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input type="password" onChange={onInputChange} id="password" className="form-control" placeholder="Password" />
                    {/*  */}
                </div>

                
                {/* <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="form2Example31"  />
                            <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                        </div>
                    </div>

                    <div className="col">
                        <a href="#!">Forgot password?</a>
                    </div>
                </div> */}
                
                <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
                
                <div className="text-center">
                    <p>Not a member? <a href="#!">Register</a></p>
                </div>
                </form>
                {
                    state.showLoader && <img src={loaderImg} alt="loader" />
                }
            </div>
        </div>
    )
}
export default Login;