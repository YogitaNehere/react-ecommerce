import React from "react";
import { Link } from "react-router-dom";
const Banners = (props) => {
    const banners = props.banner;
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

export default Banners;