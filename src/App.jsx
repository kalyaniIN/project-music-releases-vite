import data from "./data.json";
import { Album } from "./components/Album";
import Header from "./components/Header";

console.log(data);

export const App = () => {
  const { albums } = data;

  return (
    <div className="app">
      <Header /> {/* Add the Header component here */}
      <div className="album-container">
        {albums.items.map((album) => (
          <Album key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
};
