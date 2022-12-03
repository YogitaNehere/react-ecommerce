import React from "react";
import { Link } from "react-router-dom";

class MainSlider extends React.Component{
    constructor(props){
        super();
    }

    render(){
        const slider = this.props.slider;
        // console.log(slider.title);
        return(
            <div className="main_slider" style={{backgroundImage:`url(${slider.sliderImage})`}}> 

                <div className="container fill_height">
                    <div className="row align-items-center fill_height">
                        <div className="col">
                            <div className="main_slider_content">
                                <h6>{slider.category}</h6>
                                <h1>{slider.title}</h1>
                                <div className="red_button shop_now_button"><Link to={slider.pageLink}>shop now</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainSlider;