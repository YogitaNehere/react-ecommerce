import React from "react";
import "./ContactUs.scss";

import { Link } from "react-router-dom";

const ContactUs = () => {
    return(
        <div className="container contact_container">
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
                        <h1>Get In Touch With Us!</h1>
                        <p>Fill out the form below to recieve a free and confidential.</p>
                        <form action="post">
                            <div>
                                <input id="input_name" className="form_input input_name input_ph" type="text" name="name" placeholder="Name" required="required" data-error="Name is required." />
                                <input id="input_email" className="form_input input_email input_ph" type="email" name="email" placeholder="Email" required="required" data-error="Valid email is required."/>
                                <input id="input_website" className="form_input input_website input_ph" type="url" name="name" placeholder="Website" required="required" data-error="Name is required."/>
                                <textarea id="input_message" className="input_ph input_message" name="message"  placeholder="Message" rows="3" required data-error="Please, write us a message."></textarea>
                            </div>
                            <div>
                                <button id="review_submit" type="submit" className="red_button message_submit_btn trans_300" value="Submit">send message</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-6 contact_col">
                    <div className="contact_contents">
                        {/* <h1>Contact Us</h1> */}
                        <p>There are many ways to contact us. You may drop us a line, give us a call or send an email, choose what suits you the most.</p>
                        <div>
                            <p>(800) 686-6688</p>
                            <p>info.deercreative@gmail.com</p>
                        </div>
                        <div>
                            <p>Open hours: 8.00-18.00 Mon-Fri</p>
                            <p>Sunday: Closed</p>
                        </div>
                    </div>

                    {/* <!-- Follow Us --> */}

                    {/* <div className="follow_us_contents">
                        <h1>Follow Us</h1>
                        <ul className="social d-flex flex-row">
                            <li><a href="#" style="background-color: #3a61c9"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#" style="background-color: #41a1f6"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#" style="background-color: #fb4343"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                            <li><a href="#" style="background-color: #8f6247"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                        </ul>
                    </div> */}

                </div>

            </div>
        </div>
    );
}

export default ContactUs;