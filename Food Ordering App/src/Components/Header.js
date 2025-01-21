import React, { useState } from "react";
import foodLogo from '../images/food_img1.png';
import searchIcon from '../images/search_icon.png';
import offerIcon from '../images/offer_icon.png';
import userIcon from '../images/user_icon.png';
import cartIcon from '../images/cart_icon.png';
import { Link } from "react-router-dom";
import '../App.css';

const Header = () => {
    const [btnName, setBtnName] = useState('Sign In');
    // in React when you want to navigate to another page, never use an anchor tag, as the whole page will get refreshed.
    // refreshes the component.
    return (
        <div className="header">
            <div className="logo">
                <img className="logo-img" alt="foodLogo" src={foodLogo}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <img alt="searchIcon" src={searchIcon} className="icons"/>
                        <Link to="/">Search</Link>
                    </li>
                    <li>
                        <img alt="offerIcon" src={offerIcon} className="icons"/>
                        <Link to="/about">Offers</Link>
                    </li>
                    <li onClick={() => {
                        if (btnName === 'Sign In') {
                            setBtnName('Sign Out');
                        } else {
                            setBtnName('Sign In');
                        }
                    }}>
                        <img alt="userIcon" src={userIcon} className="icons"/>
                        {/* Sign In  */}
                        {btnName}
                    </li>
                    <li>
                        <img alt="cartIcon" src={cartIcon} className="icons"/>
                        <Link to="/contact">Cart</Link>
                    </li>
                    {/* <button onClick={() => {
                        if (btnName === 'LogIn') {
                            setBtnName('LogOut');
                        } else {
                            setBtnName('LogIn');
                        }
                    }}>{btnName}</button> */}
                </ul>
            </div>
        </div>
    )
}

export default Header;