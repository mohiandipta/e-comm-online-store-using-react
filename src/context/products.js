// products context
import React from 'react';
import axios from 'axios'
import url from '../utils/URL'
import { FeaturedProducts } from '../utils/helpers'
export const ProductContext = React.createContext();

// Provider, Consumer, useContext()

const ProductProvider = ({ children }) => {
    const [loading, setLoading] = React.useState(false);
    const [products, setProducts] = React.useState([]);
    const [featured, setFeatured] = React.useState([]);

    // useEffect() hook
    React.useEffect(() => {
        setLoading(true)
        axios
            .get(`${url}/products`).then(response => {
                const featured =
                    FeaturedProducts(response.data)
                setProducts(response.data);
                setFeatured(featured)
                setLoading(false)
            })
        return () => { };
    }, []);


    return (
        <ProductContext.Provider value={{ products, loading, featured }}>
            {children}
        </ProductContext.Provider>
    );
}

export default ProductProvider;
