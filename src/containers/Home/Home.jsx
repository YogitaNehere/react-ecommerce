import React from "react";
import axios from "axios";
import "./Home.scss";
import { CONSTANTS } from "../../utils/constants";
import ProductCard from "../../components/ProductCard/ProductCard";

import MainSlider from '../../components/MainSlider/MainSlider';
import Banners from '../../components/Banners/Banners';
import loaderImg from "../../assets/images/loader.gif";
// import NewArrivals from "../NewArrivals/NewArrival";

// Import css files for slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import slider_1 from '../../assets/images/slider_1.jpg';

import banner1 from '../../assets/images/banner_1.jpg';
import banner2 from '../../assets/images/banner_2.jpg';
import banner3 from '../../assets/images/banner_3.jpg';
import { useState } from "react";
import { useEffect } from "react";

const sliderData = [
    {
        category: 'SPRING / SUMMER COLLECTION 2022',
        title: 'Get up to 30% Off New Arrivals',
        sliderImage: slider_1,
        pageLink:'/'
    },
    {
        category: 'SPRING / SUMMER COLLECTION 2021',
        title: 'Get up to 60% Off New Arrivals',
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

const Home = () => {
    const [state, setState] = useState({
        sliderData: sliderData,
        bannerData: bannerData,
        productList:[],
        cartItems: 0,
        showLoader: false
    });

    useEffect(() => {
        //Show loader
        setState({...state, showLoader:true});
        axios
        .get(CONSTANTS.API_BASE_URL+'products')
        .then((response) => {
            // console.log(response.data);
            setState({
                ...state,
                productList: response.data,
                showLoader:false
            });
        })
        .catch((err) => {
            console.log(err);
            setState({...state, showLoader:false})
        })
    }, []);

    const onQtyUpdate = (operation) => {
        if(operation === 'INC'){
            setState({...state, cartItems: state.cartItems + 1})
        }else if(operation === 'DEC'){
            setState({...state, cartItems: state.cartItems - 1})
        }
    }
    const sliderDetails = state.sliderData;
    const bannerDetails = state.bannerData;
    const productDetails = state.productList;
    // console.log(productDetails);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        };

    return(
        <div>
            {/* <MainSlider slider={sliderData} key={sliderData.title}/> */}
            <Slider {...settings}>
            {
                sliderDetails.map( (slider) => {
                    return(<MainSlider slider={slider} key={slider.title} />);
                    }
                )
            }
            </Slider>
            {/* <section className="cart"> Items in Cart: {state.cartItems}</section> */}
            
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
            {/* <NewArrivals /> */}
            <div className="new_arrivals">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <div className="section_title new_arrivals_title">
                                <h2>New Arrivals</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col text-center">
                            <div className="new_arrivals_sorting">
                                <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
                                    <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center active is-checked" data-filter="*">all</li>
                                    <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".women">women's</li>
                                    <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".accessories">accessories</li>
                                    <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".men">men's</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="product-grid">
                                {
                                    state.showLoader && <img src={loaderImg} alt="loader" />
                                }

                                {/* <!-- Products --> */}

                                {/* <ProductCard key={productDetails.title} product={productDetails} /> */}
                                {productDetails.map((product) => {
                                    return (<ProductCard key={product.title} product={product} onQtyUpdate={onQtyUpdate} />);
                                }
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;