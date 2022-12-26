import { React, useState, useEffect } from "react";
import axios from "axios";
import './ProductDetails.scss';
import { Link, useLocation, useParams } from "react-router-dom";
import '../../assets/styles/single_styles.css';
// import { CONSTANTS } from "../../utils/constants";

const ProductDetails = () => {
    const [state, setState] = useState({
        productDetails: {},
        showLoader: false
    });

    // const params = useParams();
    // console.log(params);

    const location = useLocation();
    // console.log(location);
    // console.log(location.state);

    useEffect(() => {
        setState({
            ...state, productDetails: location.state
        })
    },[]);

    // const searchParams = new URLSearchParams(location.search)

    // useEffect(() => {
    //     setState({...state, showLoader:true});
    //     //const productId = params.id;
    //     const productId = searchParams.get('productID')
    //     axios
    //     .get(CONSTANTS.API_BASE_URL+'products/'+productId)
    //     .then((res) => {
    //         setState({
    //             ...state,
    //             productDetails: res.data,
    //             showLoader:false
    //         })
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //         setState({
    //             ...state,
    //             showLoader:false
    //         });
    //     })
    // }, []);
    //Empty array - componentDidMount() method

    // componentDidMount(){
    //     let path = window.location.pathname;
    //     path = path.split('/');
    //     let productID = path[2];
    //     console.log(productID);
    //     axios
    //     .get('https://fakestoreapi.com/products/'+productID)
    //     .then((response) => {
    //         console.log(response.data);
    //         this.setState({productDetails: response.data});
    //     })
    //     .catch( (error) => {
    //         console.log(error);
    //     });

    // }

    let productDetails = state.productDetails;
    return (
        <div className="container single_product_container">
                <div className="row">
                    <div className="col">
                        <div className="breadcrumbs d-flex flex-row align-items-center">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/"><i className="fa fa-angle-right" aria-hidden="true"></i>Men's</Link></li>
                                <li className="active"><Link><i className="fa fa-angle-right" aria-hidden="true"></i>Single Product </Link></li>
                            </ul>
                        </div>

                    </div>
                </div>

            <div className="row">
                <div className="col-lg-7">
                    <div className="single_product_pics">
                        <div className="row">
                            <div className="col-lg-3 thumbnails_col order-lg-1 order-2">
                                <div className="single_product_thumbnails">
                                    <ul>
                                        <li><img src={productDetails.image} alt="" data-image={productDetails.image} /></li>
                                        <li className="active"><img src={productDetails.image} alt="" data-image={productDetails.image} /></li>
                                        <li><img src={productDetails.image} alt="" data-image={productDetails.image} /></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-9 image_col order-lg-2 order-1">
                                <div className="single_product_image">
                                    <div className="single_product_image_background" style={{backgroundImage: `url(${productDetails.image})`}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="product_details">
                        <div className="product_details_title">
                            <h2>{productDetails.title}</h2>
                            <p>{productDetails.description}</p>
                        </div>
                        <div className="free_delivery d-flex flex-row align-items-center justify-content-center">
                            <span className="ti-truck"></span><span>free delivery</span>
                        </div>
                        <div className="original_price">$629.99</div>
                        <div className="product_price">$495.00</div>
                        <ul className="star_rating">
                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                            <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
                        </ul>
                        <div className="product_color">
                            <span>Select Color:</span>
                            <ul>
                                <li style={{background: "#e54e5d"}} ></li>
                                <li style={{background: "#252525"}} ></li>
                                <li style={{background: "#60b3f3"}} ></li>
                            </ul>
                        </div>
                        <div className="quantity d-flex flex-column flex-sm-row align-items-sm-center">
                            <span>Quantity:</span>
                            <div className="quantity_selector">
                                <span className="minus"><i className="fa fa-minus" aria-hidden="true"></i></span>
                                <span id="quantity_value">1</span>
                                <span className="plus"><i className="fa fa-plus" aria-hidden="true"></i></span>
                            </div>
                            <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                            <div className="product_favorite d-flex flex-column align-items-center justify-content-center"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;