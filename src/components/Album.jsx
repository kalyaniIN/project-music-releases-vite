import React from "react";
import { AlbumName } from "./Album/AlbumName";
import { CoverImage } from "./Album/CoverImage";
import { ArtistName } from "./Album/ArtistName"; // Import the ArtistName component

export const Album = ({ album }) => {
  const { name, artists, images, external_urls } = album;

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
        {artists.map((artist, index) => (
          <React.Fragment key={artist.id}>
            {index > 0 && (
              index === artists.length - 1 ? " & " : ", " // Add comma and & conditionally
            )}
            <a
              href={artist.external_urls.spotify}
              className="artist-name"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => openSpotifyLink(artist.external_urls.spotify)}
            >
              <ArtistName artistName={artist.name} />
            </a>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
