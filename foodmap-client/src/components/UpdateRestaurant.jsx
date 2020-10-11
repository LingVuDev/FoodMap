import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import RestaurantFinder from '../apis/RestaurantFinder';

const UpdateRestaurant = () => {
  const { id } = useParams();
  let history = useHistory();

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');
  
  useEffect(() => {
    RestaurantFinder.get(`/${id}`).then((response) => {
      if (response.data.data.restaurant) {
        const { restaurant } = response.data.data;
        setName(restaurant.name);
        setLocation(restaurant.location);
        setPriceRange(restaurant.price_range);
      }
    });
  }, [setName, setLocation, setPriceRange, id]);

  const updateRestaurant = (event) => {
    event.preventDefault();
    const restaurant = {
      name,
      location,
      price_range: priceRange,
    };
    RestaurantFinder.put(`/${id}`, restaurant).then(() => {
      history.push('/');
    });
  }

  return (
    <div>
      <form action="" onSubmit={updateRestaurant}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            className="form-control"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            id="location"
            className="form-control"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price_range">Price Range</label>
          <select
            id="price_range"
            className="custom-select"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            required
          >
            <option value="" disabled>
              Price Range
            </option>
            <option value="1">€</option>
            <option value="2">€€</option>
            <option value="3">€€€</option>
            <option value="4">€€€€</option>
            <option value="5">€€€€€</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateRestaurant;
