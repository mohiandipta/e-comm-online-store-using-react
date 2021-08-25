import React from 'react';
import { Link } from 'react-router-dom'

const Product = ({ image, title, id, price }) => {
    const url = image
    return (
        <article className="product">
            <div className="img-container">
                <img src={url} alt={title} />
                <div>
                    <Link to={`products/${id}`} className="btn-product-details">details</Link>
                </div>
                <div className="prodcut-footer">
                    <p className="product-title">{title}</p>
                    <p className="product-price">${price}</p>
                </div>
            </div>
        </article>
    );
}

export default Product;
