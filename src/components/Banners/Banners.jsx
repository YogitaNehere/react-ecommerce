import React from "react";
import { Link } from "react-router-dom";

class Banners extends React.Component{
    constructor(props){
        super();
    }

    render(){
        const banners = this.props.banner;
        // console.log(banners);
        return(
            <div className="col-md-4">
                <div className="banner_item align-items-center" style={{backgroundImage: `url(${banners.bannerImage})`}}>
                    <div className="banner_category">
                        <Link to={banners.url}>{banners.title}</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banners;