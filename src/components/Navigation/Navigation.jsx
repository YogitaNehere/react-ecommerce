import React from "react";
import { Link } from "react-router-dom";

class Navigation extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="main_nav_container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-right">
                            <div className="logo_container">
                                <Link to="/">colo<span>shop</span></Link>
                            </div>
                            <nav className="navbar">
                                <ul className="navbar_menu">
                                    <li><Link to="/">Home</Link></li>
                                    <li><a href="#">shop</a></li>
                                    {/* <li><a href="#">promotion</a></li> */}
                                    {/* <li><a href="#">pages</a></li> */}
                                    {/* <li><a href="#">blog</a></li> */}
                                    <li><Link to="/contact-us">Contact</Link></li>
                                </ul>
                                <ul className="navbar_user">
                                    <li><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-user" aria-hidden="true"></i></a></li>
                                    <li className="checkout">
                                        <Link to='/cart'>
                                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                            <span id="checkout_items" className="checkout_items">2</span>
                                        </Link>
                                    </li>
                                </ul>
                                <div className="hamburger_container">
                                    <i className="fa fa-bars" aria-hidden="true"></i>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Navigation;