import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';
import StarRating from '../components/StarRating';
import Reviews from '../components/Reviews';

export const DetailPage = () => {
  const { id } = useParams();
  let history = useHistory();
  const { selectedRestaurant, setSelectedRestaurant } = useContext(
    RestaurantsContext
  );

  useEffect(() => {
    RestaurantFinder.get(`/${id}`).then((response) => {
      if (response.data.data.restaurant) {
        const { restaurant } = response.data.data;
        setSelectedRestaurant(restaurant);
      }
    });
  }, [setSelectedRestaurant, id]);

  return (
    <div className="mx-4">
      <h1 className="text-center">
        {selectedRestaurant && selectedRestaurant.name}
      </h1>
      <div className="row">
        <div className="col text-center">
          Location: {selectedRestaurant && selectedRestaurant.location}
        </div>
        <div className="col text-center">
          Rating: <StarRating rating={3.1} />
        </div>
        <div className="col text-center">
            Price Range: {selectedRestaurant && '€'.repeat(selectedRestaurant.price_range)}
        </div>
      </div>
      <div className="mx-3">
        <Reviews />
      </div>
      
      <button
        type="submit"
        className="btn btn-primary"
        onClick={() => history.push('..')}
      >
        Back
      </button>
    </div>
  );
};
