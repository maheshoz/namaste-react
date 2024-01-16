


Build wireframe first
divide layout into components


Header
 - Logo
 - Nav Items

Body
 - Search
 - RestaurantContainer
   - ResaurantCard

Footer
  - COpyright
  - Links
  - Address
  - Contact

---

adding styles
```jsx
  const styleCard = {
    backgroundColor : "coral",
    fontSize : "20px"
  }

<div className="res-card" style={styleCard}></div>
<div className="res-card" style={{bakcgoundColor: 'coral' }}></div>
```

Dynamic components with props
like function parameters we can pass props to React Components

we can destructure props
```jsx

const RestaurantCard = (props) => {
  console.log(props);
  return (
    <div className='res-card'>
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
    
    </div>
  );
};

const RestaurantCard = (props) => {
  const {resName, cuisine} = props;
  return (
    <div className='res-card'>
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
    
    </div>
  );
};

const RestaurantCard = ({resName, cuisine}) => {}

```

Right click and open in new tab to view the cards api, use json viewer extension , swiggy uses config
![Alt text](./images/swiggy-api.png)

**Config Driven UI**
based on api data, UI loads different data for different locations

```jsx

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

const RestaurantCard = (props) => {
  console.log(props);
  return (
    <div className='res-card'>
      <img
        className="res-logo"
        src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/lltunkievzpxrrcarfmy'
        alt='res logo'
      />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <p>4.4 stars</p>
      <p>38 minutes</p>
    </div>
  );
};

const Body = () => {
  return (
    <div className='body'>
      <div className='search'></div>
      <div className='res-container'>
        <RestaurantCard 
          resName="Meghana Foods"
          cuisine="Biryani, North indian"/>
        <RestaurantCard 
          resName="KFC"
          cuisine="fast food, burger"/>
       
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
```


Passing prop data 

```js

const resObj = {
  "info": {
    "id": "273752",
    "name": "Brahmins Tiffin Centre",
    "cloudinaryImageId": "qmwj1vbbjljfp2saegsk",
    "locality": "New Thipasandra",
    "areaName": "Indiranagar",
    "costForTwo": "₹150 for two",
    "cuisines": [
      "South Indian",
      "North Indian",
      "Chinese"
    ],
    "avgRating": 4.4,
    "veg": true,
    "avgRatingString": "4.4",
    "isOpen": true
  }
}

const RestaurantCard = ({resData}) => {
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
```

Optional Chainig
`obj?.data`
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining


```jsx
const resList =[{}, {}];

resList.map(restaurant => (
    <RestaurantCard 
      key={restaurant.info.id} 
      resData={restaurant}
    />
  ))
```

if there is no key, then if a new item is added in the list object, react will load all the cards

if key is given, only the new item will be rendered/added to the existing component UI tree.

Note : add a key when we map over the component
Dont use array index as key, it is anti-pattern

**05**
https://legacy.reactjs.org/docs/faq-structure.html

Make the components file - Header, Body etc..

Do not put Hardcoded data in Components Folder.

Types of import/export

- Default export/import
```
export default Component;
import Component from "path";
```
- named import/export
```
export const Component;
import {Component} from "path";
```


In a file, we can have only one default export. for multiple export we can use named export

Keep the components small, use 100 lines for component

Adding events
- events are camelCase in react attributes unlike js events
```js
 <button 
          className='filter-btn'
          onClick={() => {
            resList = resList.filter(
              res => res.info.avgRating > 4
            );
          }}
          onMouseOver={() => {
            console.log('mouse over');
          }}
        >
          Top Rated Restaurants
        </button>
```

```js
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
         
          }}>
          Top Rated Restaurants
  </button>
```
If the data changes, the UI changes 

### React Hooks
Normal JS utility functions
- useState()
- useEffect()

Whenever a state variable changes, react rerenders the component

**Reconciliation Algorithm or React Fiber** 
- Virtual DOM - it is representatin of  actual DOM
- Diff algorithm - when state chagnes, it finds the difference b/w previous and updated virtual DOM
- incremental rendering

https://legacy.reactjs.org/docs/reconciliation.html#gatsby-focus-wrapper

https://github.com/acdlite/react-fiber-architecture


### 06
about Monolith and Microservice architecture

Monolith - has all the API, UI, Auth, DB, SMS modules

Microservie - Different servies for different jobs- UI , API, Email . Seperation of Concerns, Single Responsibilty Principle

ex: 
```
application can use Different ports for different Microservices
:1234 UI      /
:1000 Backend /api
:3000 SMS    /sms
```

https://www.atlassian.com/microservices/microservices-architecture/microservices-vs-monolith


render api data after we get a response, user has to wait and view a blank screen till api success
Load -> API -> Render 

load the component and when we get API response rerender - react follows this approach
Load -> render - >API -> Render
its better UX, 


### useEffect()

After react renders the component then the useEffect is called

```js
 useEffect(()=> {
    console.log('useEffect called');
  }, []);
```

CORS - if origin mismatch browser blocks api call

<iframe width="944" height="531" src="https://www.youtube.com/embed/tcLW5d0KAYE" title="CORS, Preflight Request, OPTIONS Method | Access Control Allow Origin Error Explained" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


add Allow CORS chrome extension to browser

<iframe width="800" height="400" src="https://www.youtube.com/embed/KruSUqLdxQA" title="Allow CORS - Browser Extension Review" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Json viewer website - https://jsonviewer.stack.hu/

```js
const Body = () => {

  // const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

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
  }

  // console.log('<Body/> component rendered');

  if(listOfRestaurants.length === 0) {
    return <h1>Loading....</h1>
  }
  return (
    <div className='body'>
      <div className='filter'>
        <button 
          className='filter-btn'
          onClick={() => {
            // filter based on rating
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.4
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
```

add Shimmer UI

Conditional Rendering
```js
if(listOfRestaurants.length === 0) {
  return <Shimmer/>
  }
// use ternary operator
return listOfRestaurants.length === 0 ? <Shimmer/> : (...)
```

Renders Header Component on Btn click
but compares the virtual dom previous state and only updates  btn
```js
<button 
  className="login"
  onClick={() => {
    btnName === "Login"
      ? setBtnName("Logout")
      : setBtnName("Login");
  }}
  >
    {btnName}
</button>
```

Whenever state variables update, react triggres a reconciliation cycle(re-renders the component)

onChange, onClick events

```js
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
    // if searchText is empty '', return true, 'abc'.includes('') true
    // so on empty str,filter list has original resDetails
    const filterRestaurant = listOfRestaurants.filter(
      res => res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    
    console.log(filterRestaurant);

    setFilteredRestaurants(filterRestaurant)
  }}
>
  Search</button>
```