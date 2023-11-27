const PlaylistsSidebar = ({ playlists }) => {
  return (
    <div className="sidebar">
      <h2>Popular Playlists</h2>
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist.id}>
            <a href={playlist.external_urls.spotify}>{playlist.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistsSidebar;