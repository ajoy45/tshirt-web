import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import'./Header.css'
const Header = () => {
    return (
        <div className='header-container'>
            <nav>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/order">Order</CustomLink>
            </nav>
        </div>
    );
};

export default Header;