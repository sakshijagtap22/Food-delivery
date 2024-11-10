import React, { useState, useEffect } from 'react';
import { restaurants } from '../mock/data';
import "./BrowseRestaurants.css";
import { useCart } from '../context/CartContext';

const BrowseRestaurants = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [cuisineFilter, setCuisineFilter] = useState('');
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(null);
  // const [cart, setCart] = useState([]);
  const { cart, addToCart } = useCart();

  useEffect(() => {
    // Mock fetching data from API
    setRestaurantList(restaurants);
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleCuisineFilter = (e) => {
    setCuisineFilter(e.target.value);
  };

  const toggleMenuView = (id) => {
    setSelectedRestaurantId((prevId) => (prevId === id ? null : id));
  };


  // Filtered and searched list based on user input
  const filteredRestaurants = restaurantList.filter((restaurant) => {
    const matchesCuisine = cuisineFilter ? restaurant.cuisine === cuisineFilter : true;
    const matchesSearch = restaurant.menu.some(item =>
      item.name.toLowerCase().includes(searchTerm)
    );
    return matchesCuisine && matchesSearch;
  });

  return (
    <div className="restaurants-container">
      <h2>Browse Restaurants</h2>

      <div className="filters">
        <input
          type="text"
          placeholder="Search menu items..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <select value={cuisineFilter} onChange={handleCuisineFilter}>
          <option value="">All Cuisines</option>
          <option value="Italian">Italian</option>
          <option value="Japanese">Japanese</option>
          <option value="Vegetarian">Vegetarian</option>
        </select>
      </div>

      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => (
          <div key={restaurant.id} className="restaurant-card">
            <h3>{restaurant.name}</h3>
            <p>Cuisine: {restaurant.cuisine}</p>
            <p>Rating: {restaurant.rating}</p>
            <button onClick={() => toggleMenuView(restaurant.id)}>
              {selectedRestaurantId === restaurant.id ? "Hide Menu" : "View Menu"}
            </button>

            {selectedRestaurantId === restaurant.id && (
              <div className="menu-list">
                <h4>Menu</h4>
                {restaurant.menu.map((item) => (
                  <div key={item.id} className="menu-item">
                    <p>{item.name} - ${item.price.toFixed(2)}</p>
                    <button onClick={() => addToCart(item, restaurant.name)}>
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseRestaurants;
