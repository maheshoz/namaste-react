import React from "react";
import ReactDOM from "react-dom/client";


const resList = [
  {
    "info": {
      "id": "793210",
      "name": "Aattutheeram Kerala Restaurant",
      "cloudinaryImageId": "7dad18ba53a7f5fd4df728f9173ad706",
      "locality": "Thippiah Layout",
      "areaName": "Koramangala",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Kerala",
        "Biryani",
        "Chinese",
        "Snacks",
        "Seafood",
        "Desserts"
      ],
      "avgRating": 4.1,
      "parentId": "21348",
      "avgRatingString": "4.1",
      "totalRatingsString": "50+",
    },
  },
  {
    "info": {
      "id": "269402",
      "name": "The Tea Brewery",
      "cloudinaryImageId": "v4s7ectlujr8325ejrnc",
      "locality": "1st Block",
      "areaName": "Koramangala",
      "costForTwo": "₹100 for two",
      "cuisines": [
        "Beverages",
        "Snacks",
        "Bakery",
        "Desserts"
      ],
      "avgRating": 4.6,
      "parentId": "21147",
      "avgRatingString": "4.6",
      "totalRatingsString": "10K+",
    }
  },
  {
    "info": {
      "id": "186263",
      "name": "Banoffee",
      "cloudinaryImageId": "il57ug5swnfkapcbxrz8",
      "locality": "HSR Layout",
      "areaName": "HSR Layout",
      "costForTwo": "₹600 for two",
      "cuisines": [
        "American",
        "Continental",
        "Italian",
        "Japanese",
        "Sushi",
        "Asian",
        "German",
        "Mexican",
        "Beverages",
        "Desserts"
      ],
      "avgRating": 4.2,
      "parentId": "41516",
      "avgRatingString": "4.2",
      "totalRatingsString": "1K+",
    },
   },
  {
    "info": {
      "id": "660675",
      "name": "Cafe Amudham",
      "cloudinaryImageId": "384d020ad18d2752ddd119cb585024d7",
      "locality": "5th Block Kormangala",
      "areaName": "Koramangala",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "South Indian"
      ],
      "avgRating": 4.6,
      "veg": true,
      "parentId": "396620",
      "avgRatingString": "4.6",
      "totalRatingsString": "5K+",
      "isOpen": true,
      "type": "F",
    },
  
  },
  {
    "info": {
      "id": "16197",
      "name": "Kullad Cafe",
      "cloudinaryImageId": "6ba232b342c03ae95a41965735d8e517",
      "locality": "2nd Stage",
      "areaName": "BTM Layout",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "North Indian",
        "Snacks",
        "Fast Food",
        "Beverages"
      ],
      "avgRating": 4.2,
      "veg": true,
      "parentId": "21550",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "availability": {
        "nextCloseTime": "2024-01-15 23:00:00",
        "opened": true
      },
      "isOpen": true,
    }
  }
]

/*
Header
 - Logo
 - Nav Items

Body
 - Search
 - RestaurantContainer
   - ResaurantCard - Img, name , star rating, cuisines

Footer
  - COpyright
  - Links
  - Address
  - Contact
*/

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img
          className='logo'
          src='https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png'
          alt='logo image'
        />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({resData}) => {
  // console.log(resData);
  console.log(resData.info);

  const {name, cuisines, avgRating, areaName, cloudinaryImageId} = resData.info;

  return (
    <div className='res-card'>
      <img
        className="res-logo"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
        alt='res logo'
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <p>{avgRating} stars</p>
      <p>{areaName}</p>
    </div>
  );
};

const Body = () => {
  return (
    <div className='body'>
      <div className='search'>{resList.length}</div>
      <div className='res-container'>
       {
        
        resList.map(restaurant => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
        ))
       }
       
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
