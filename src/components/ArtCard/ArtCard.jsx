import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faComment,
  faBookmark,
} from '@fortawesome/free-regular-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';

import './ArtCard.css';

const ArtCard = ({ submission }) => {
  const {
    artImage,
    artistName,
    artName,
    description,
    bio,
    hoursTaken,
    forSale,
    price,
  } = submission.data;

  return (
    <div className="art-card">
      <img
        src={artImage}
        alt={artName}
        className="art-image"
      />
      <div className="art-details">
        <h3>{artistName}</h3>
        <p>{description}</p>
        <div className="art-info">
          <span>{bio}</span>
          <span>⏱ {hoursTaken} hrs</span>
          {forSale && <span>💰 ₹{price}</span>}
        </div>
      </div>
      <div className="art-actions">
        <button><FontAwesomeIcon icon={faHeart} /></button>
        <button><FontAwesomeIcon icon={faComment} /></button>
        <button><FontAwesomeIcon icon={faShareAlt} /></button>
        <button><FontAwesomeIcon icon={faBookmark} /></button>
      </div>
    </div>
  )
};

export default ArtCard;