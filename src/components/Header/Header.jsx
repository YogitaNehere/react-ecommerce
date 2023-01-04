import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { logoutUser, userData } from "../../actions/userActions";

const Header = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const csLogout = () => {
        dispatch(logoutUser());
        if(!user.isLoggedIn){
            navigate("/");
        }
    }
    
    // console.log(user);
    
    return(
        // <div className="super_container">
        <div>
        <header className="header trans_300">

            {/* -- Top Navigation -- */}

            <div className="top_nav">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="top_nav_left">free shipping on all u.s orders over $50</div>
                        </div>
                        <div className="col-md-6 text-right">
                            <div className="top_nav_right">
                                <ul className="top_nav_menu">
                                    
                                    <li className="account">
                                        <a href="#">
                                            My Account
                                            <i className="fa fa-angle-down"></i>
                                        </a>
                                        {
                                            (!user.isLoggedIn) ? (
                                                <div>
                                                    <ul className="account_selection">
                                                        <li>
                                                            <Link to="/login"><i className="fa fa-sign-in" aria-hidden="true"></i>Sign In</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/register"><i className="fa fa-user-plus" aria-hidden="true"></i>Register</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            ):
                                            (
                                               
                                                <div>
                                                    <ul className="account_selection">
                                                       
                                                        <li>
                                                            <Link to="/profile"><i className="fa fa-user-plus" aria-hidden="true"></i>My Profile</Link>
                                                        </li>
                                                        <li>
                                                            <span onClick={csLogout}><i className="fa fa-sign-out" aria-hidden="true"></i>Logout</span>
                                                        </li>
                                                    </ul>
                                                </div> 
                                            )
                                        }
                                        
                                    </li>
                                    {
                                        (user.isLoggedIn) && (                                            
                                            <li className="account1"><div>{user.userData.user !=='' && <span>Welcome {user.userData.user}</span>}</div></li>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Main Navigation --> */}
            <Navigation />

        </header>
        <div className="fs_menu_overlay"></div>
        </div>
        );
}
export default Header;