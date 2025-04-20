import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faComment,
  faBookmark,
} from '@fortawesome/free-regular-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';

import './ArtCard.css';

const ArtCard = ({ submission }) => {
  return (
    <div className="art-card">
      <img
        src={submission.artImage}
        alt={submission.artName}
        className="art-image"
      />
      <div className="art-details">
        <h3>{submission.artistName}</h3>
        <p>{submission.description}</p>
        <div className="art-info">
          <span>{submission.bio}</span>
          <span>⏱ {submission.hoursTaken} hrs</span>
          {submission.forSale && <span>💰 ₹{submission.price}</span>}
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