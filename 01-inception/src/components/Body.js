import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from 'react'

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  // let listOfRestaurants = [
  //   {
  //     "info": {
  //       "id": "793210",
  //       "name": "Aattutheeram Kerala Restaurant",
  //       "cloudinaryImageId": "7dad18ba53a7f5fd4df728f9173ad706",
  //       "locality": "Thippiah Layout",
  //       "areaName": "Koramangala",
  //       "costForTwo": "₹350 for two",
  //       "cuisines": [
  //         "Kerala",
  //         "Biryani",
  //         "Chinese",
  //         "Snacks",
  //         "Seafood",
  //         "Desserts"
  //       ],
  //       "avgRating": 4.1,
  //       "parentId": "21348",
  //       "avgRatingString": "4.1",
  //       "totalRatingsString": "50+",
  //     },
  //   },
  // ]

  return (
    <div className='body'>
      <div className='filter'>
        <button 
          className='filter-btn'
          onClick={() => {
            // filter based on rating
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
         
          }}
         >
          Top Rated Restaurants
        </button>
      </div>
      <div className='res-container'>
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
