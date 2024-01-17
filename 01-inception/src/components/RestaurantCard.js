import {CDN_URL} from "../utils/constants"

const RestaurantCard = ({resData}) => {
  // console.log(resData);
  // console.log(resData.info);

  const {id, name, cuisines, avgRating, areaName, cloudinaryImageId} = resData.info;

  return (
    <div className='res-card'>
      <img
        className="res-logo"
        src={ CDN_URL + cloudinaryImageId}
        alt='res logo'
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <p>{avgRating} stars</p>
      <p>{areaName} - id: {id}</p>
    </div>
  );
};

export default RestaurantCard;