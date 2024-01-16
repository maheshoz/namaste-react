import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from 'react'
import Shimmer from "./Shimmer";

const Body = () => {

  // const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestauants, setFilteredRestaurants] = useState([]);
  
  const [searchText, setSearchText] = useState('');

  console.log("Body rendered");

  useEffect(()=> {
    console.log('useEffect called');
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

    const jsonData = await data.json();

    console.log('api data ' , jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)

    //optional chaining
    const filterJson = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    //setData to rerender 
    setListOfRestaurants(filterJson);
    setFilteredRestaurants(filterJson);
  }


  return listOfRestaurants.length === 0 ? <Shimmer/> : (
    <div className='body'>
      <div className='filter'>
        <div className="search">
          <input type="text" className="search-box" 
            value={searchText}
            onChange={(e)=> {
              console.log('search val', e.target.value);
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={()=> {
              // Filter the cards and update UI
              // searchText
              console.log(searchText);
              let a = searchText;
              console.log('a -', a);

              const filterRestaurant = listOfRestaurants.filter(
                res => res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              
              console.log(filterRestaurant);

              setFilteredRestaurants(filterRestaurant)
            }}
          >
            Search</button>
        </div>
        <button 
          className='filter-btn'
          onClick={() => {
            // filter based on rating
            listOfRestaurants.forEach(item => {console.log(item.info.avgRating);})
            
            let filteredList = listOfRestaurants.filter( res => res.info.avgRating > 4.1 );
            console.log(filteredList);
            
            // let filteredList = [];
            // listOfRestaurants.forEach(item => {
            //   if(item.info.avgRating > 4.1) filteredList.push(item)
            // })
            // console.log(filteredList);

            setListOfRestaurants(filteredList);
         
          }}
         >
          Top Rated Restaurants
        </button>
      </div>
      <div className='res-container'>
        {filteredRestauants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
