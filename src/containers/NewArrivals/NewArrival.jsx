import React from "react";
import product_1 from '../../assets/images/product_1.png';
import product_2 from '../../assets/images/product_2.png';
import product_3 from '../../assets/images/product_3.png';
import ProductCard from "../../components/ProductCard/ProductCard";

const productData = 
[
    {
        category: 'men',
        image: product_1,
        discount: 20,
        title: 'Fujifilm X100T 16 MP Digital Camera (Silver)',
        price: 520.00,
        discountedamt: 580.00
    },
    {
        category: 'women',
        image: product_2,
        discount: 0,
        title: 'Samsung CF591 Series Curved 27-Inch FHD Monitor',
        price: 600.00,
        discountedamt: 0
    },
    {
        category: 'women',
        image: product_3,
        discount: 0,
        title: 'Blue Yeti USB Microphone Blackout Edition',
        price: 120.00,
        discountedamt: 0
    }
];

class NewArrivals extends React.Component{
    constructor(props){
        super();
        this.state = {
            productData:productData
        }
    }
    
    render(){
        const productDetails = this.state.productData;
        console.log(productDetails);
        return(
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
                            <div className="product-grid" data-isotope='{ "itemSelector": ".product-item", "layoutMode": "fitRows" }'>

                                {/* <!-- Products --> */}

                                {/* <ProductCard key={productDetails.title} product={productDetails} /> */}
                                {productDetails.map((product) => {
                                    return (<ProductCard key={product.title} product={product} />);
                                }
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewArrivals;