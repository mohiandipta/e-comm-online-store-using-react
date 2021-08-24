// products context
import React from 'react';
import axios from 'axios'
import url from '../utils/URL'
export const ProductContext = React.createContext();

//Provider, Consumer, useContext()

const ProductProvider = ({ children }) => {
    const [loading, setLoading] = React.useState(false);
    const [products, setProducts] = React.useState([]);
    const [featured, setFeatured] = React.useState([]);

    // useEffect() hook
    React.useEffect(() => {
        axios.get(`${url}/products`).then(storeProducts => console.log(storeProducts))
        return () => {
        }
    })


    return (
        <ProductContext.Provider value={{ products, loading, featured }}>
            {children}
        </ProductContext.Provider>
    );
}

export default ProductProvider;
