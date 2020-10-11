import React, {useState, useContext} from 'react';
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';

export const AddRestaurant = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const {restaurants, setRestaurants} = useContext(RestaurantsContext);

  const submit = (event) => {
    event.preventDefault();
    const restaurant = {
      name,
      location,
      price_range: priceRange,
    };
    RestaurantFinder.post('/', restaurant).then((response) => {
      setRestaurants(response.data.data.restaurants);
    });
  };

  return (
    <div className="mb-4">
      <form action="" onSubmit={submit}>
        <div className="form-row align-items-center">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div className="col">
            <select
              className="custom-select my-1 mr-sm-2"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              required
            >
              <option value="" disabled>Price Range</option>
              <option value="1">€</option>
              <option value="2">€€</option>
              <option value="3">€€€</option>
              <option value="4">€€€€</option>
              <option value="5">€€€€€</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
