import React, { Component } from 'react';
import Hero from '../components/Hero'
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div>
                <><Hero>
                    <Link to="/products" className="btn-hero">
                        our product
                    </Link>
                </Hero></>

            </div>
        );
    }
}

export default Home;
