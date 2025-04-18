import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faComment,
  faBookmark,
  faTrashAlt, 
} from '@fortawesome/free-regular-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import './ArtFeed.css';

const ArtFeed = ({ submissions, onDelete }) => {
  
  const handleDelete = (timestamp) => {
    if (onDelete) {
      onDelete(timestamp);
    }
  };

  return (
    <div className="art-feed">
      {submissions.map((submission, index) => (
        <div key={index} className="art-card">
          <img src={submission.artImage} alt={submission.artName} className="art-image" />
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
            <button onClick={() => handleDelete(submission.timestamp)}><FontAwesomeIcon icon={faTrashAlt} /></button> {/* Delete button */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArtFeed;