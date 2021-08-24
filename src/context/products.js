// products context

import React from 'react';

export const ProductContext = React.createContext();

//Provider, Consumer, useContext()

const ProductProvider = ({ children }) => {
    const [loading, setLoading] = React.useState(false);
    const [products, setProducts] = React.useState([]);
    const [featured, setFeatured] = React.useState([]);
    return (
        <ProductContext.Provider value={{ products, loading, featured }}>
            {children}
        </ProductContext.Provider>
    );
}

export default ProductProvider;
