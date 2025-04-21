import { useEffect, useState } from "react";
import { getLikes } from "../../api/interact";

import ArtCard from "../../components/ArtCard/ArtCard";

import './likes_page.css';

const MeLikesPage = () => {
  const [likes, setSaves] = useState([]);

  useEffect(() => {
    const fetchSaves = async () => {
      const likedPosts = await getLikes();
      setSaves(likedPosts);
    };

    fetchSaves();
  }, []);

  return (
    <div className="me-likes-page">
      <h1>My Likes</h1>
      <div className="liked-posts">
        {likes.map((submission) => <ArtCard
          submission={submission}
          key={submission.postId}
        />)}
      </div>
    </div>
  )
};

export default MeLikesPage;
