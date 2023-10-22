import { AlbumName } from "./Album/AlbumName";
import { ArtistName } from "./Album/ArtistName";
import { CoverImage } from "./Album/CoverImage";

export const Album = ({ album }) => {
  const { name, artists, images, external_urls } = album;
  const artistNames = artists.map((artist) => artist.name).join(", ");

  const openSpotifyLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="album">
      <div className="image-container">
        <CoverImage coverImage={images[1].url} />
      </div>
      <a
        href={external_urls.spotify}
        className="album-name"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => openSpotifyLink(external_urls.spotify)}
      >
        <AlbumName albumName={name} />
      </a>
      <div className="artists">
        <a
          href={artists[0].external_urls.spotify}
          className="artist-name"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => openSpotifyLink(artists[0].external_urls.spotify)}
        >
          <ArtistName artistName={artistNames} />
        </a>
      </div>
    </div>
  );
};
