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
                <RestaurantCard resImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7" resName="Pizza Hut" resRating="4.1" resTime="45-50 mins" resCuisine="Pizzas" resAddress="Vaishali Nagar"/>
                <RestaurantCard resImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597" resName="Chinese Wok" resRating="4.3" resTime="45-50 mins" resCuisine="Chinese, Asian, Tibetian, Desserts" resAddress="Vidhyadhar Nagar"/>
                <RestaurantCard resImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d0450ce1a6ba19ea60cd724471ed54a8" resName="Domino's Pizza" resRating="4.2" resTime="20-25 mins" resCuisine="Pizzas, Pastas, Italian, Desserts" resAddress="Jhotwara"/>
                <RestaurantCard resImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b9ixfa8dpbf19njypjbt" resName="La Pinoz's Pizza" resRating="4.2" resTime="25-30 mins" resCuisine="Pizzas, Pastas, Italian, Desserts" resAddress="Jhotwara"/>
                <RestaurantCard resImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf" resName="Burger King" resRating="4.3" resTime="45-50 mins" resCuisine="Burger, American" resAddress="Vaishali Nagar"/>
            </div>
        </div>
    )
}

export default Body;