import React, { useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import "../App.css";
// import restaurants from "../utils/mockData";
import { useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // State variable - Super powerful variable
  // when react state is updated then it will re-render the component
  // let [listOfRestaurants, setListOfRestaurants] = useState(restaurants);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState('');
  // always create useState variables inside the component, else error.
  // purpose to create local state variables inside functional components
  // never use useState inside any condition, loops, functions.

  useEffect(() => {
    fetchData();
    // console.log("useEffect called: called at time of re-render");
  }, []);
  // dependency array [] changes the behaviour of the render.
  // without dependency array is called at every component render.
  // empty initial array [], then it will be called at initial render, only at one time.
  // if [searchText] then at every change in searchText will call useEffect.
  // CORS Extension
  // corsproxy.io, append the first part
  const fetchData = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.894436110845174&lng=75.7077919319272&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    // fetch() : super-power provided by browsers (JS engine)
    const jsonData = await data.json();
    // console.log(jsonData);
    setListOfRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  // Conditional Rendering  
  // if (listOfRestaurants.length === 0) {
  //   // loader
  //   // return <h1>loading</h1>

  //   // Shimmer UI: resembles the actual UI
  //   return <Shimmer/>
  // }
  

  // return listOfRestaurants.length === 0 ? <Shimmer /> : (
  return (
    <div className="body-div">
      <div className="search">
        <input type="text" placeholder="Search..." value={searchText} onChange={(e) => {
          setSearchText(e.target.value);
        }}/>
        <button onClick={() => {
          // console.log(searchText);
          const searchFilteredList = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
          setFilteredRestaurants(searchFilteredList);
        }}>Search</button>
      </div>
      <div className="filter-btns">
        <button className="filter-btn top-btn" onClick={() => {
          const topFilteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.3)
          setFilteredRestaurants(topFilteredList);
          // console.log('btn-clicked')
        }}>Top Rated Restaurants</button>
        <button className="filter-btn near-btn">Near Me</button>
      </div>
      {listOfRestaurants.length === 0 ? <Shimmer /> : (
      <div className="restaurant-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resObj={restaurant} />
        ))}
      </div>)}
    </div>
  );
};

export default Body;
