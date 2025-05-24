
import Restaurant from "./Restaurant";

 
function RestaurantsContainer({restaurants}) {
  
  return (
    <div className="restaurantContainer">
      {restaurants.map(restaurant => <Restaurant restaurant={restaurant} />)}
    </div>
  );
}

export default RestaurantsContainer;
