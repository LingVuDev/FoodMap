import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';
import StarRating from '../components/StarRating';
import Reviews from '../components/Reviews';
import { AddReview } from '../components/AddReview';

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
      <button
        type="submit"
        className="btn mt-2"
        onClick={() => history.push('..')}
      >
        Back
      </button>
      <h1 className="text-center">
        {selectedRestaurant && selectedRestaurant.name}
      </h1>
      <div className="row">
        <div className="col text-center">
          Location: {selectedRestaurant && selectedRestaurant.location}
        </div>
        <div className="col text-center">
          <StarRating rating={3.1} />
        </div>
        <div className="col text-center">
          Price Range:{' '}
          {selectedRestaurant && '€'.repeat(selectedRestaurant.price_range)}
        </div>
      </div>
      <div className="mx-3">
        <Reviews />
      </div>
      <AddReview />
    </div>
  );
};
