import React from "react";

class ProductCard extends React.Component{
    constructor(props){
        super();
        this.state = {
            qty: 0
        }
        // this.qty = 0;
    }

    addToCart = (e) => {
        e.preventDefault();
        // this.state.qty = this.state.qty+1;
        this.setState({
            qty: this.state.qty+1
        }, ()=> {
            // console.log(this.state.qty);
        });
    };

    render(){
        const product = this.props.product;
        // console.log(product);
        return (
            <div className="product-item men">
                <div className="product discount product_filter">
                    <div className="product_image">
                        <img src={product.image} alt={product.title} />
                    </div>
                    <div className="favorite favorite_left"></div>
                    {product.discount !=0 ? <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-${product.discount}</span></div>: null}
                    
                    <div className="product_info">
                        <h6 className="product_name"><a href="single.html">{product.title}</a></h6>{this.state.qty}
                        <div className="product_price">${product.price} {product.discountedamt > 0 ?<span>${product.discountedamt}</span>: null}</div>
                    </div>
                </div>
                <div className="red_button add_to_cart_button"><a href="#" onClick={this.addToCart} >add to cart</a></div>
            </div>
        );
    }
}

export default ProductCard;