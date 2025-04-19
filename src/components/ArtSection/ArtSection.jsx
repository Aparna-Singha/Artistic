import ArtFeed from "../ArtFeed/ArtFeed";
import "./ArtSection.css"

const ArtSection = ({ artType }) => {
  return (
    <div key={artType} className="art-section">
      <h2 className="art-section-title">{artType}</h2>
      <ArtFeed artType={artType} />
    </div>
  )
}

export default ArtSection;
