import React from 'react';
import StarRating from './StarRating';

const Reviews = () => {
  return (
    <div className="row mb-2">
      <div className="col-4 mb-2">
        <div className="mx-1 card text-white bg-primary">
          <div className="card-header d-flex justify-content-between">
            <span>Joan</span>
            <span>
              <StarRating rating={3} />
            </span>
          </div>
          <div className="card-body">
            <div className="card-text">This restaurant was awsome</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
