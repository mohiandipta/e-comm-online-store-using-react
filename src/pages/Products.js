import React, { useContext } from 'react';
import { ProductContext } from '../context/products'

const Products = () => {
    const { loading, products } = React.useContext(ProductContext);

    return (
        <div>
            <h1>Hello from products page </h1>
        </div>
    );
}

export default Products;

