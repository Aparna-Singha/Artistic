import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faHeart as faHeartRegular,
  faBookmark as faBookmarkRegular,
  faComment,
} from '@fortawesome/free-regular-svg-icons';
import {
  faHeart as faHeartSolid,
  faBookmark as faBookmarkSolid,
  faShareAlt,
} from '@fortawesome/free-solid-svg-icons';

import './ArtCard.css';
import { useCallback, useState } from 'react';
import { likePost, savePost } from '../../api/interact';

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

  const [liked, setLiked] = useState(submission.interactions.liked);
  const [saved, setSaved] = useState(submission.interactions.saved);

  const postId = submission.postId;

  const handleLike = useCallback(async () => {
    await likePost(postId);
    setLiked((prev) => !prev);
  }, [postId]);

  const handleSave = useCallback(async () => {
    await savePost(postId);
    setSaved((prev) => !prev);
  }, [postId]);

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
        <button onClick={handleLike}>
          <FontAwesomeIcon
            icon={liked ? faHeartSolid : faHeartRegular}
          />
        </button>
        <button>
          <FontAwesomeIcon
            icon={faComment}
          />
        </button>
        <button>
          <FontAwesomeIcon
            icon={faShareAlt}
          />
        </button>
        <button onClick={handleSave}>
          <FontAwesomeIcon
            icon={saved ? faBookmarkSolid : faBookmarkRegular}
          />
        </button>
      </div>
    </div>
  )
};

export default ArtCard;
