import React from 'react';
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
    const { id } = useParams();

    return (
        <div>
            <h1>Hello from Product Details page.product id is {id}</h1>
        </div>
    )
}
