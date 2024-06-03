import React from "react";
import ratingIcon from '../images/rating_icon.png';
import '../App.css';

const RestaurantCard = (props) => {
    return (
        <div className="restaurant-card">
            <img alt="Pizza Hut" className="res-img" src={props.resImg} />
            <div className="card-content">
                <p className="res-heading">{props.resName}</p>
                <div className="card-sub-content">
                    <img alt="ratingIcon" src={ratingIcon} className="rating-icon" />
                    <span className="rating">{props.resRating}  •  {props.resTime}</span>
                </div>
                <p>{props.resCuisine}</p>
                <p>{props.resAddress}</p>
            </div>
        </div>
    )
}

export default RestaurantCard;