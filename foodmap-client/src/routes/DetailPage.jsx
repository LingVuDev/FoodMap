import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

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
  }, [setSelectedRestaurant]);

  return (
    <div class="mx-4">
      <h1 className="text-center">
        {selectedRestaurant && selectedRestaurant.name}
      </h1>
      <div class="row">
        <div class="col text-center">
          Location: {selectedRestaurant && selectedRestaurant.location}
        </div>
        <div class="col text-center">
            Price Range: {selectedRestaurant && '€'.repeat(selectedRestaurant.price_range)}
        </div>
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
