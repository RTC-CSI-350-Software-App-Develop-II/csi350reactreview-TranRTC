
import Restaurant from "./Restaurant";
import {restaurants} from "../data/data"

//Containers are for behind the scenes logic  
function RestaurantsContainer() {
  console.log(restaurants);
  return (
    <div className="restaurantContainer">
      {restaurants.map(restaurant => <Restaurant restaurant={restaurant} />)}
    </div>
  );
}

export default RestaurantsContainer;
