import data from "./data.json";
import { Album } from "./components/Album";
import Header from "./components/Header";
import PlaylistsSidebar from "./components/PlayListsSidebar";

console.log(data);

export const App = () => {
  const { albums } = data;
  const singles = albums.items.filter((album) => album.album_type === "single");
  const albumsList = albums.items.filter((album) => album.album_type !== "single");

  return (
    <div className="app">
      <Header />
      <div className="album-container">
        {albums.items.map((album) => (
          <Album key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
};
