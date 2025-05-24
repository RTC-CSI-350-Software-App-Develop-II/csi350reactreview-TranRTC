import "./App.css";

import RestaurantsContainer from "./components/RestaurantsContainer";

/* 
Data of restaurants can be imported here and passed down
App - ResaurantContainer - Restaurant
*/
import {restaurants} from "../src/data/data"



function App() {


  return (
    <div className="App">
      <RestaurantsContainer restaurants={restaurants}/>
    </div>
  );
}

export default App;
