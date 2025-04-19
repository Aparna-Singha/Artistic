import React, { useContext } from 'react';
import ArtSection from '../components/ArtSection/ArtSection';
import { SubmissionsContext } from '../context/submissions';

const HomePage = () => {
  const { submissions } = useContext(SubmissionsContext);

  const groupedSubmissions = submissions.reduce((acc, submission) => {
    const type = submission.artName || 'Others';
    if (!acc[type]) acc[type] = [];
    acc[type].push(submission);
    return acc;
  }, {});
  
  return (
    <div className="home-page">
      {Object.keys(groupedSubmissions).map((artType) => (
        <ArtSection artType={artType} key={artType} />
      ))}
    </div>
  );
};

export default HomePage;