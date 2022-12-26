import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = (props) => {
    const [state, setState] = useState({
        qty: 0,
        availableQty: 5,
        isOutOfStock: false
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const addToCart = (e) => {
        e.preventDefault();
        // this.state.qty = this.state.qty+1;
        let newQty = state.qty + 1;
        let newAvailableQty = state.availableQty - 1;
        setState({
            ...state,
            qty: newQty,
            availableQty: newAvailableQty,
            isOutOfStock: newAvailableQty ===0,
        });
        props.onQtyUpdate('INC');
    };
    const onProductClick = () => {
        // console.log('product clicked');
        // navigate("product-details/?productID="+product.id, {
        //     state: props.product
        // });
        navigate("product-details", {
            state: props.product
        });
    }
    const product = props.product;
    return(
        <div className="product-item men">
            <div className="product discount product_filter" onClick={onProductClick}>
                {/* <Link to={"product-details/"+product.id} > */}
                    <div className="product_image">
                        <img src={product.image} alt={product.title} />
                    </div>
                    <div className="favorite favorite_left"></div>
                    {/* {product.discount !=0 ? <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-${product.discount}</span></div>: null} */}
                    
                    <div className="product_info">
                        <h6 className="product_name"><a href="single.html">{product.title}</a></h6>{state.qty}
                        <div className="product_price">${product.price} {product.discountedamt > 0 ?<span>${product.discountedamt}</span>: null}</div>
                    </div>
                {/* </Link> */}
            </div>
            <div className="red_button add_to_cart_button"><a href="#" onClick={addToCart} >add to cart</a></div>
        </div>
    );
}

export default ProductCard;