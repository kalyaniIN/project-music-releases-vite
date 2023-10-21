import { AlbumName } from "./Album/AlbumName";
import { ArtistName } from "./Album/ArtistName";
import { CoverImage } from "./Album/CoverImage";

export const Album = ({ album }) => {
  const { name, artists, images } = album;

  const artistNames = artists.map((artist) => artist.name).join(", ");

  return (
    <div className="album">
       <div className="icons">
          <img className="icon heart" src="heart.svg" alt="heart-icon"/>
          <img className="icon play" src="../icons/play.svg" />
          <img className="icon dot" src="../icons/dots.svg" />
        </div>
      <CoverImage coverImage={images[1].url} />
      <AlbumName albumName={name} />
      <div className="artists">
        <ArtistName artistName={artistNames} />
      </div>
    </div>
  );
};
