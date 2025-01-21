import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API_URL + resId + "&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        // console.log(json);
        setResInfo(json.data);
    }

    const info = resInfo?.cards[2]?.card?.card?.info;
    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    return resInfo === null ? ( <Shimmer/> ) : (
        <div className="menu">
            <h1>{info.name}</h1>
            <h3>{info.cuisines.join(", ")} - </h3>
            <h4>{info.costForTwoMessage}</h4>
            <h2>Menu</h2>
            <ul>
                { itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name}</li> )}
            </ul>
        </div>
    );
};

export default RestaurantMenu;