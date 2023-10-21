import { AlbumName } from "./Album/AlbumName";
import { ArtistName } from "./Album/ArtistName";
import { CoverImage } from "./Album/CoverImage";

export const Album = ({ album }) => {
  const { name, artists, images } = album;

  const artistNames = artists.map((artist) => artist.name).join(" & ");

  return (
    <div className="album">
      <CoverImage coverImage={images[1].url} />
      <AlbumName albumName={name} />
      <div className="artists">
        <ArtistName artistName={artistNames} />
      </div>
    </div>
  );
};