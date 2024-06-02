import React from "react";
import ratingIcon from '../images/rating_icon.png';
import '../App.css';

const RestaurantCard = () => {
    return (
        <div className="restaurant-card">
            <img alt="Pizza Hut" className="res-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7" />
            <div className="card-content">
                <p className="res-heading">Pizza Hut</p>
                <div className="card-sub-content">
                    <img alt="ratingIcon" src={ratingIcon} className="rating-icon" />
                    <span className="rating">4.1  •  40-45 mins</span>
                </div>
                <p>Quisine</p>
                <p>Address</p>
            </div>
        </div>
    )
}

export default RestaurantCard;