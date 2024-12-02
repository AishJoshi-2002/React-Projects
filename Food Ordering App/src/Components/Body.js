import React from "react";
import RestaurantCard from "./RestaurantCard";
import "../App.css";
import restaurants from './data.js';

const Body = () => {
  return (
    <div className="body-div">
      <div className="search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="restaurant-container">
        {
            restaurants.map((restaurant) => <RestaurantCard key={restaurant.info.id} resObj={restaurant} />)
        }
      </div>
    </div>
  );
};

export default Body;
