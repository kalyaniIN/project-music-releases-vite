import React from "react";
import { AlbumName } from "./Album/AlbumName";
import { CoverImage } from "./Album/CoverImage";

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
        <a
          href={artists[0].external_urls.spotify}
          className="artist-name"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => openSpotifyLink(artists[0].external_urls.spotify)}
        >
          {artists[0].name}
        </a>
        {artists.length > 1 && (
          <React.Fragment>
            {artists.slice(1).map((artist, index) => (
              <React.Fragment key={artist.id}>
                {" "}
                {index === artists.length - 2 ? " & " : ", "}
                <a
                  href={artist.external_urls.spotify}
                  className="artist-name"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => openSpotifyLink(artist.external_urls.spotify)}
                >
                  {artist.name}
                </a>
              </React.Fragment>
            ))}
          </React.Fragment>
        )}
      </div>
    </div>
  );
};
