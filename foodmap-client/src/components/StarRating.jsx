import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fas from '@fortawesome/free-solid-svg-icons';
import * as far from '@fortawesome/free-regular-svg-icons';

const StarRating = ({ rating, numberOfRatings }) => {
  const stars = [];
  for (let index = 1; index <= 5; index++) {
    if (index <= rating) {
      stars.push(<FontAwesomeIcon className="text-warning" key={index} icon={fas.faStar} />)
    } else if (index === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<FontAwesomeIcon className="text-warning" key={index} icon={fas.faStarHalfAlt} />)
    } else {
      stars.push(<FontAwesomeIcon className="text-warning" key={index} icon={far.faStar} />)
    }
  }

  return (
    <div>
      {stars} {numberOfRatings && `(${numberOfRatings})`}
    </div>
  )
}

export default StarRating
