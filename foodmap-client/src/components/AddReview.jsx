import React, { useContext, useState } from 'react';
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';

export const AddReview = () => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [content, setContent] = useState('');
  const { selectedRestaurant, setSelectedRestaurant } = useContext(
    RestaurantsContext
  );

  const reset = () => {
    setName('');
    setRating(5);
    setContent('');
  };

  const submit = (event) => {
    event.preventDefault();
    const review = {
      name,
      rating,
      content,
    };

    RestaurantFinder.post(`${selectedRestaurant.restaurant.id}/reviews`, review).then((response) => {
      setSelectedRestaurant(response.data.data);
    });
  };

  return (
    <div className="mb-2">
      <form action="" onSubmit={submit}>
        <div className="form-row">
          <div className="form-group col-12">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              className="form-control"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group col-12">
            <label htmlFor="rating">Rating (Higher is better)</label>
            <select
              className="custom-select my-1 mr-sm-2"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            >
              <option value="" disabled>
                Rating 
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="form-group col-12">
            <label htmlFor="review">Review</label>
            <textarea
              id="review"
              className="form-control"
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <button className="btn btn-primary mr-2" type="submit">Submit</button>
          <button className="btn" type="button" onClick={reset}>Clear</button>
        </div>
      </form>
    </div>
  );
};
