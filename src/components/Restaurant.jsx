function Restaurant({restaurant}) {
  //Presentational components are primarily focused on the visual appearance and styling.
  
  return (
    <div className="restaurant">
      <h2>{restaurant.name}</h2>
      <ul>
        <li>{restaurant.address}</li>
        <li>{restaurant.phone}</li>
        <li>{restaurant.cuisine}</li>
        <li>{restaurant.rating}</li>
      </ul>
    </div>
  );
}

export default Restaurant;