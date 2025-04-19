import { useContext } from 'react';
import { SubmissionsContext } from '../../context/submissions';
import ArtCard from '../ArtCard/ArtCard';

import './ArtFeed.css';

const ArtFeed = () => {
  const { submissions } = useContext(SubmissionsContext);

  return (
    <div className="art-feed">
      {submissions.map((submission, index) => (
        <ArtCard submission={submission} key={index} />
      ))}
    </div>
  );
};

export default ArtFeed;