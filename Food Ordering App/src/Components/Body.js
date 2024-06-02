import React from "react";
import RestaurantCard from "./RestaurantCard";
import '../App.css'

const Body = () => {
    return (
        <div className="body-div">
            <div className="search">
                <input type="text" placeholder="Search..."/>
            </div>
            <div className="restaurant-container">
                <RestaurantCard/>
            </div>
        </div>
    )
}

export default Body;