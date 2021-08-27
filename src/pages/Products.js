import React, { useContext } from 'react';
import { ProductContext } from '../context/products'
import Loading from '../components/Loading'
import ProductList from '../components/product/ProductList'

const Products = () => {
    const { loading, products } = React.useContext(ProductContext);
    console.log(products)

    if (loading) {
        return <Loading />
    }
    return <ProductList title="our product" products={products} />
}

export default Products;