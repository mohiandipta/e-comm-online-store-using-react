import React, { useContext } from 'react';
import { ProductContext } from '../context/products'

const Products = () => {
    const { greeting } = React.useContext(ProductContext);
    return (
        <div>
            <h1>Hello from products page {greeting}</h1>
        </div>
    );
}

export default Products;

