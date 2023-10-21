import data from "./data.json";
import { Album } from "./components/Album";

console.log(data);

export const App = () => {
  const { albums } = data;

  return (
    <div className="app">
      <div className="album-container">
        {albums.items.map((album) => (
          <Album key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
};
