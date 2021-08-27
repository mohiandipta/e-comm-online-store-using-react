import React, { Component } from 'react';
import Hero from '../components/Hero'
import { Link } from 'react-router-dom'
import FeaturedProduct from '../components/product/FeaturedProducts'

class Home extends Component {
    render() {
        return (
            <section>
                <div>
                    <><Hero>
                        <Link to="/products" className="btn-hero">
                            our product
                        </Link>
                    </Hero></>
                </div>
                <div className="featured-products">
                    <FeaturedProduct />
                </div>
            </section>
        );
    }
}

export default Home;
