import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Error extends Component {
    render() {
        return (
            <section className="error-page-section">
                <div className="error-container">
                    <h1>oops! it's a dead end</h1>
                </div>

                <div>
                    <Link to="/" className="btn-back-home">back home</Link>
                </div>
            </section>
        );
    }
}

export default Error;
