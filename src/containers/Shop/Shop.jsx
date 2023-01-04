import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CONSTANTS } from "../../utils/constants";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Shop.scss";
import loaderImg from "../../assets/images/loader.gif";
import Category from "../../components/Category/Category";

const Shop = () => {
    const [state, setState] = useState({
        productList: [],
        productListCopy: [],
        categories: [],
        showLoader: false
    });

    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location);

    useEffect(() => {
        setState({
            ...state, showLoader:true
        });
        // Get categories
        // axios
        // .get(CONSTANTS.API_BASE_URL+"products/categories")
        // .then((response) => {
        //     // console.log(response.data);
        //     setState({
        //         ...state,
        //         categories: response.data
        //     });
        // })
        // .catch((error) => {
        //     console.log("categories error: "+error);
        // });
        //Get products
        axios
        .get(CONSTANTS.API_BASE_URL+"products")
        .then((response1) => {
            // console.log(response.data);
            setState({
                ...state,
                productList: response1.data,
                productListCopy: response1.data,
                showLoader:false
            });
        })
        .catch((error) => {
            setState({...state, showLoader:false});
        });
    }, []);

	console.log(state.categories);
	console.log(state.productList);
    const onCategoryClick = (category) => {
        // console.log(category);
        // navigate("shop/?category="+category);
        // if(category == ""){
        //     setState({...state, productListCopy: state.productList});
        //     return;
        // }
        // useEffect(() => {
        //     axios
        //     .get(CONSTANTS.API_BASE_URL+"products/category"+category)
        //     .then((response) => {
        //         console.log(response.data);
        //         const products = response.data;
        //         setState({
        //             ...state,
        //             productList: products
        //         });
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     })
        // });
        const filteredList = state.productList.map((product) => {
            console.log('in loop', category, product.category);
            return (product.category.toLowerCase().includes(category.toLowerCase())); 
            
        });
        setState({...state, productList: filteredList});
    }
    const productDetails = state.productList;
    const prodCategories = state.categories;
    
    //Empty array: componentDidMount method
    return (
        <div className="container product_section_container">
		<div className="row">
			<div className="col product_section clearfix">

				<div className="breadcrumbs d-flex flex-row align-items-center">
					<ul>
						<li><Link to="/">Home</Link></li>
						<li className="active"><i className="fa fa-angle-right" aria-hidden="true"></i>Men's</li>
					</ul>
				</div>

				{/* <!-- Sidebar --> */}

				<div className="sidebar">
					<div className="sidebar_section">
						<div className="sidebar_title">
							<h5>Product Category</h5>
						</div>
						<ul className="sidebar_categories">
                            {
                                prodCategories.map((category) => {
                                    let cat = category.charAt(0).toUpperCase() + category.slice(1);
                                    return (<li><span onClick={() => onCategoryClick(category)} id={category}>{cat}</span></li>)
                                    // return (<Category key={category} category={category} productList={productDetails} />);
                                })
                            }
						</ul>
					</div>

					{/* <!-- Price Range Filtering --> */}
					<div className="sidebar_section">
						<div className="sidebar_title">
							<h5>Filter by Price</h5>
						</div>
						<p>
							{/* <input type="text" id="amount" style="border:0; color:#f6931f; font-weight:bold;" /> */}
						</p>
						<div id="slider-range"></div>
						<div className="filter_button"><span>filter</span></div>
					</div>

					{/* <!-- Sizes --> */}
					<div className="sidebar_section">
						<div className="sidebar_title">
							<h5>Sizes</h5>
						</div>
						<ul className="checkboxes">
							<li><i className="fa fa-square-o" aria-hidden="true"></i><span>S</span></li>
							<li className="active"><i className="fa fa-square" aria-hidden="true"></i><span>M</span></li>
							<li><i className="fa fa-square-o" aria-hidden="true"></i><span>L</span></li>
							<li><i className="fa fa-square-o" aria-hidden="true"></i><span>XL</span></li>
							<li><i className="fa fa-square-o" aria-hidden="true"></i><span>XXL</span></li>
						</ul>
					</div>

					{/* <!-- Color --> */}
					<div className="sidebar_section">
						<div className="sidebar_title">
							<h5>Color</h5>
						</div>
						<ul className="checkboxes">
							<li><i className="fa fa-square-o" aria-hidden="true"></i><span>Black</span></li>
							<li className="active"><i className="fa fa-square" aria-hidden="true"></i><span>Pink</span></li>
							<li><i className="fa fa-square-o" aria-hidden="true"></i><span>White</span></li>
							<li><i className="fa fa-square-o" aria-hidden="true"></i><span>Blue</span></li>
							<li><i className="fa fa-square-o" aria-hidden="true"></i><span>Orange</span></li>
							<li><i className="fa fa-square-o" aria-hidden="true"></i><span>White</span></li>
							<li><i className="fa fa-square-o" aria-hidden="true"></i><span>Blue</span></li>
							<li><i className="fa fa-square-o" aria-hidden="true"></i><span>Orange</span></li>
							<li><i className="fa fa-square-o" aria-hidden="true"></i><span>White</span></li>
							<li><i className="fa fa-square-o" aria-hidden="true"></i><span>Blue</span></li>
							<li><i className="fa fa-square-o" aria-hidden="true"></i><span>Orange</span></li>
						</ul>
						<div className="show_more">
							<span><span>+</span>Show More</span>
						</div>
					</div>

				</div>

				{/* <!-- Main Content --> */}

				<div className="main_content">

					{/* <!-- Products --> */}

					<div className="products_iso">
						<div className="row">
							<div className="col">

								{/* <!-- Product Sorting --> */}

								{/* <div className="product_sorting_container product_sorting_container_top">
									<ul className="product_sorting">
										<li>
											<span className="type_sorting_text">Default Sorting</span>
											<i className="fa fa-angle-down"></i>
											<ul className="sorting_type">
												<li className="type_sorting_btn" data-isotope-option='{ "sortBy": "original-order" }'><span>Default Sorting</span></li>
												<li className="type_sorting_btn" data-isotope-option='{ "sortBy": "price" }'><span>Price</span></li>
												<li className="type_sorting_btn" data-isotope-option='{ "sortBy": "name" }'><span>Product Name</span></li>
											</ul>
										</li>
										<li>
											<span>Show</span>
											<span className="num_sorting_text">6</span>
											<i className="fa fa-angle-down"></i>
											<ul className="sorting_num">
												<li className="num_sorting_btn"><span>6</span></li>
												<li className="num_sorting_btn"><span>12</span></li>
												<li className="num_sorting_btn"><span>24</span></li>
											</ul>
										</li>
									</ul>
									<div className="pages d-flex flex-row align-items-center">
										<div className="page_current">
											<span>1</span>
											<ul className="page_selection">
												<li><a href="#">1</a></li>
												<li><a href="#">2</a></li>
												<li><a href="#">3</a></li>
											</ul>
										</div>
										<div className="page_total"><span>of</span> 3</div>
										<div id="next_page" className="page_next"><a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></div>
									</div>

								</div> */}

								{/* <!-- Product Grid --> */}

								<div className="product-grid">
									{
                                        state.showLoader && <img src={loaderImg} alt="loader" />
                                    }
                                    {productDetails.map((product) => {
                                        return (<ProductCard key={product.title} product={product} />);
                                    }
                                    )}

								</div>

								{/* <!-- Product Sorting --> */}

								{/* <div className="product_sorting_container product_sorting_container_bottom clearfix">
									<ul className="product_sorting">
										<li>
											<span>Show:</span>
											<span className="num_sorting_text">04</span>
											<i className="fa fa-angle-down"></i>
											<ul className="sorting_num">
												<li className="num_sorting_btn"><span>01</span></li>
												<li className="num_sorting_btn"><span>02</span></li>
												<li className="num_sorting_btn"><span>03</span></li>
												<li className="num_sorting_btn"><span>04</span></li>
											</ul>
										</li>
									</ul>
									<span className="showing_results">Showing 1–3 of 12 results</span>
									<div className="pages d-flex flex-row align-items-center">
										<div className="page_current">
											<span>1</span>
											<ul className="page_selection">
												<li><a href="#">1</a></li>
												<li><a href="#">2</a></li>
												<li><a href="#">3</a></li>
											</ul>
										</div>
										<div className="page_total"><span>of</span> 3</div>
										<div id="next_page_1" className="page_next"><a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></div>
									</div>

								</div> */}

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    );
}

export default Shop;