import React from "react";

import '../../assets/plugins/OwlCarousel2-2.2.1/owl.carousel.css';
import '../../assets/plugins/OwlCarousel2-2.2.1/owl.theme.default.css';
import '../../assets/plugins/OwlCarousel2-2.2.1/animate.css';

import MainSlider from '../../components/MainSlider/MainSlider';
import Banners from '../../components/Banners/Banners';
import NewArrivals from "../NewArrivals/NewArrival";

import slider_1 from '../../assets/images/slider_1.jpg';

import banner1 from '../../assets/images/banner_1.jpg';
import banner2 from '../../assets/images/banner_2.jpg';
import banner3 from '../../assets/images/banner_3.jpg';

const sliderData = [
    {
        category: 'SPRING / SUMMER COLLECTION 2022',
        title: 'Get up to 30% Off New Arrivals',
        sliderImage: slider_1,
        pageLink:'/'
    },
];

const bannerData = [
    {
        title:"women's",
        bannerImage: banner1,
        url:'/'
    },
    {
        title:"accessories's",
        bannerImage: banner2,
        url:'/'
    },
    {
        title:"men's",
        bannerImage: banner3,
        url:'/'
    }
];

class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            sliderData: sliderData,
            bannerData: bannerData,
        }
    };
   

    render(){
        const sliderDetails = this.state.sliderData;
        const bannerDetails = this.state.bannerData;

        return(
            <div>
                {/* <MainSlider slider={sliderData} key={sliderData.title}/> */}
                {
                    sliderDetails.map( (slider) => {
                        return(<MainSlider slider={slider} key={slider.title} />);
                        }
                    )
                }
                
                {/* Banners */}
                <div className="banner">
                    <div className="container">
                        <div className="row">
                            {bannerDetails.map( (banner) => {
                                return(<Banners key={banner.title} banner={banner} />);
                            } )}
                            {/* <Banners /> */}
                        </div>
                    </div>
                </div>

                {/* New Arrivals */}
                <NewArrivals />
            </div>
        )
    }
}

export default Home;