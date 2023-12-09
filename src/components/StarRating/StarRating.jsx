
import { FaStar, FaStarHalf, FaRegStar } from 'react-icons/fa';
import PropTypes from 'prop-types';

const StarRating = ({ rating }) => {
  const MAX_STARS = 5; // Maximum rating stars

  // Calculate the number of full stars, half stars, and empty stars
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  // Create an array with star components
  const stars = Array.from({ length: MAX_STARS }, (_, index) => (
    <span key={index}>
      {index < fullStars ? (
        <FaStar />
      ) : hasHalfStar && index === fullStars ? (
        <FaStarHalf />
      ) : (
        <FaRegStar />
      )}
    </span>
  ));

  return <div className="star-rating flex">{stars}</div>;
};

StarRating.propTypes = {
    rating: PropTypes.node,
}
export default StarRating;