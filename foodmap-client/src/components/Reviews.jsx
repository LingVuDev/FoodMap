import React from 'react';
import StarRating from './StarRating';

const Reviews = ({ reviews }) => {
  if (!reviews) {
    reviews = [];
  }

  return (
    <div className="row mb-2">
      {reviews.map((review) => (
        <div className="col-4 mb-2" key={review.id}>
          <div className="mx-1 card text-white bg-primary">
            <div className="card-header d-flex justify-content-between">
              <span>{review.name}</span>
              <span>
                <StarRating rating={review.rating} />
              </span>
            </div>
            <div className="card-body">
              <div className="card-text">{review.content}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
