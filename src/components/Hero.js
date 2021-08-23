import React from 'react';
import Banner from '../assets/banner.jpg'

const Hero = ({ children }) => {
    return (
        <div className="hero">
            <img src={Banner} alt="banner-img" className="banner-img" />
            <div className="banner">
                <h1>think, code, deploy</h1>
                <p>embrace your choices - we do</p>
                {children}
            </div>
        </div>
    );
}

export default Hero;
