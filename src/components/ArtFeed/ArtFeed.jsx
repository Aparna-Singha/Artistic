import { useContext } from 'react';
import { SubmissionsContext } from '../../context/submissions';
import ArtCard from '../ArtCard/ArtCard';

import './ArtFeed.css';

const ArtFeed = ({ artType }) => {
  const { submissions } = useContext(SubmissionsContext);

  return (
    <div className="art-feed">
      {submissions
        .filter(s => s.data.artName === artType)
        .map((submission, index) => (
          <ArtCard submission={submission} key={index} />
        ))}
    </div>
  );
};

export default ArtFeed;