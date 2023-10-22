import { AlbumName } from "./Album/AlbumName";
import { ArtistName } from "./Album/ArtistName";
import { CoverImage } from "./Album/CoverImage";

export const Album = ({ album }) => {
  const { name, artists, images, external_url } = album;
  const artistNames = artists.map((artist) => artist.name).join(", ");

  return (
    <div className="album">
      <div className="image-container">
        <CoverImage coverImage={images[1].url} />
      </div>
      <a href={external_url} className="album-name">
        <AlbumName albumName={name} />
      </a>
      <div className="artists">
        <a href={external_url} className="artist-name">
          <ArtistName artistName={artistNames} />
        </a>
      </div>
    </div>
  );
};