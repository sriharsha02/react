import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const styleCard = {
    backgroundColor: "#F0F0F0",
  };
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines = [],
    avgRating,
    costForTwo,
    sla: { deliveryTime } = {},
  } = resData?.info;
  // console.log("Image ID:", cloudinaryImageId);

  return (
    <div className="res-card" style={styleCard}>
      <img className="res-image" src={CDN_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
