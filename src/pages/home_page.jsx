import React, { useEffect, useState } from 'react';
import ArtFeed from '../components/ArtFeed/ArtFeed';

const HomePage = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const storedSubmissions = JSON.parse(localStorage.getItem('submissions')) || [];
    setSubmissions(storedSubmissions);
  }, []);
  const handleDeleteSubmission = (timestamp) => {
    const updated = submissions.filter(sub => sub.timestamp !== timestamp);
    setSubmissions(updated);
    localStorage.setItem('submissions', JSON.stringify(updated));
  };



  const groupedSubmissions = submissions.reduce((acc, submission) => {
    const type = submission.artName || 'Others';
    if (!acc[type]) acc[type] = [];
    acc[type].push(submission);
    return acc;
  }, {});


  
  return (
    <div className="home-page">
      {Object.keys(groupedSubmissions).map((artType) => (
        <div key={artType} className="art-section">
          <h2 className="art-section-title">{artType}</h2>
          <ArtFeed submissions={groupedSubmissions[artType]} onDelete={handleDeleteSubmission} />
        </div>
      ))}
    </div>
  );
};

export default HomePage;