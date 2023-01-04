import React, { useState } from "react";

const Category = (props) => {
    const [state, setState] = useState({
        productList: props.productList,
    })
    let cat = props.category.charAt(0).toUpperCase() + props.category.slice(1);

    // const onCategoryClick = (category) => {
    //     console.log(category)
    //     const filteredList = props.productList.filter((product) => 
    //         { 
    //         //console.log(...product.category);
    //         product.category.toLowerCase().includes(category.toLowerCase());
    //         }
    //     );
    //     console.log(filteredList);
    //     setState({...state, productList: filteredList});
    // }
    // <li><span onClick={() => onCategoryClick(props.category)} id={props.category}>{cat}</span></li>
    return (
        <li><span id={props.category}>{cat}</span></li>
    );
}

export default Category;