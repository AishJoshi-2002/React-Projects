import React from "react";
import foodLogo from './images/food_logo.png';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img className="logo-img" alt="app_logo" src={foodLogo}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="footer">

        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="restaurant-container">
                <RestaurantCard/>
            </div>
        </div>
    )
}

const RestaurantCard = () => {
    return (
        <div className="restaurant-card">
            <h3>Sai Chaap Corner</h3>
        </div>
    )
}

const AppLayout = () => {
  return (
      <div className="app">
          <Header/>
          <Body/>
      </div>
  )
}

export default AppLayout;
