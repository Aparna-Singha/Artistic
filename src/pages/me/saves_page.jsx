import { useEffect, useState } from "react";
import { getSaves } from "../../api/interact";

import ArtCard from "../../components/ArtCard/ArtCard";

import './saves_page.css';

const MeSavesPage = () => {
  const [saves, setSaves] = useState([]);

  useEffect(() => {
    const fetchSaves = async () => {
      const savedPosts = await getSaves();
      setSaves(savedPosts);
    };

    fetchSaves();
  }, []);

  return (
    <div className="me-saves-page">
      <h1>My Saves</h1>
      <div className="saved-posts">
        {saves.map((submission) => <ArtCard
          submission={submission}
          key={submission.postId}
        />)}
      </div>
    </div>
  )
};

export default MeSavesPage;
