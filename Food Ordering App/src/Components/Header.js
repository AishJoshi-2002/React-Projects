import React from "react";
import foodLogo from '../images/food_img1.png';
import searchIcon from '../images/search_icon.png';
import offerIcon from '../images/offer_icon.png';
import userIcon from '../images/user_icon.png';
import cartIcon from '../images/cart_icon.png';
import '../App.css';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img className="logo-img" alt="foodLogo" src={foodLogo}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <img alt="searchIcon" src={searchIcon} className="icons"/>
                        Search
                    </li>
                    <li>
                        <img alt="offerIcon" src={offerIcon} className="icons"/>
                        Offers
                    </li>
                    <li>
                        <img alt="userIcon" src={userIcon} className="icons"/>
                        Sign In 
                    </li>
                    <li>
                        <img alt="cartIcon" src={cartIcon} className="icons"/>
                        Cart
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;