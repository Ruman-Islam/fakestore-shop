import React from 'react';
import './Menubar.css';
const Menubar = ({ cartCount }) => {
    if (cartCount !== 0) {
        // console.log('cart count zero er soman na', cartCount);
        JSON.stringify(sessionStorage.setItem('productCount', cartCount));
    }
    const items = JSON.parse(sessionStorage.getItem('productCount'));

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-2 p-2">logo</div>
                    <div className="col-md-10 menu-container d-flex justify-content-end">
                        <li className="items me-4 p-2">Home</li>
                        <li className="items me-4 p-2">Contact</li>
                        <li className="items me-4 p-2">
                            Cart <sup>{cartCount === 0 ? cartCount : items}</sup>
                        </li>
                        <li className="items me-4 p-2">Login</li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menubar;