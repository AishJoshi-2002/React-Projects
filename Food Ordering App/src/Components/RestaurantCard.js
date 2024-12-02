import React from "react";
import ratingIcon from '../images/rating_icon.png';
import '../App.css';

const imgUrlPrefix = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"

const RestaurantCard = (props) => {
    const { resObj } = props
    const { cloudinaryImageId, name, avgRatingString, sla, cuisines, areaName} = resObj.info
    return (
        <div className="restaurant-card">
            <img alt="Pizza Hut" className="res-img" src={imgUrlPrefix + cloudinaryImageId} />
            <div className="card-content">
                <p className="res-heading">{name}</p>
                <div className="card-sub-content">
                    <img alt="ratingIcon" src={ratingIcon} className="rating-icon" />
                    <span className="rating">{avgRatingString}  •  {sla.slaString}</span>
                </div>
                <p>{cuisines.join(", ")}</p>
                <p>{areaName}</p>
            </div>
        </div>
    )
}

export default RestaurantCard;