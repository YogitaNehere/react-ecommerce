import React from "react";
import "./Profile.scss";
import { Link } from "react-router-dom";

const Profile = () => {
    return (
        <div className="user_profile_container">
           <div className="product_details_container">
            <div className="container single_product_container">
                <div className="row">
                    <div className="col">
                        <div className="breadcrumbs d-flex flex-row align-items-center">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li className="active"><Link><i className="fa fa-angle-right" aria-hidden="true"></i>Profile </Link></li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-7">
                        <div className="single_product_pics">
                            
                            
                        </div>
                    </div>
                    <div className="col-lg-5">
                        
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
    
}

export default Profile;
