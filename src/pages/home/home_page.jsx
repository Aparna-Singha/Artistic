import React, { useContext } from 'react';
import ArtSection from '../../components/ArtSection/ArtSection';
import { SubmissionsContext } from '../../context/submissions';

const HomePage = () => {
  const { submissions } = useContext(SubmissionsContext);
  
  const artTypes = submissions.map(submission => submission.data.artName);
  const uniqueArtTypes = [...new Set(artTypes)];
  
  return (
    <div className="home-page">
      {uniqueArtTypes.map((artType) => (
        <ArtSection artType={artType} key={artType} />
      ))}
    </div>
  );
};

export default HomePage;