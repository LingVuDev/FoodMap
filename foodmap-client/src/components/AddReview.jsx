import React, { useState } from 'react';

export const AddReview = () => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState('');

  const reset = () => {
    setName('');
    setRating(5);
    setReviewText('');
  };

  return (
    <div className="mb-2">
      <form action="">
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
            <label htmlFor="rating">Rating</label>
            <select
              className="custom-select my-1 mr-sm-2"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            >
              <option value="" disabled>
                Rating
              </option>
              <option value="1">⭐</option>
              <option value="2">⭐⭐</option>
              <option value="3">⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐</option>
              <option value="5">⭐⭐⭐⭐⭐</option>
            </select>
          </div>
          <div className="form-group col-12">
            <label htmlFor="review">Review</label>
            <textarea
              id="review"
              className="form-control"
              type="text"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            />
          </div>
          <button className="btn btn-primary mr-2">Submit</button>
          <button className="btn" type="button" onClick={reset}>Clear</button>
        </div>
      </form>
    </div>
  );
};
