import data from "./data.json";
import { Album } from "./components/Album";

console.log(data);

export const App = () => {
  const {albums} = data

  return (
    <div className="app">
      <h1>displaying something</h1>
      {albums.items.map((album) => (
       
       <Album  key= {album.id} albumData={album} />
    ))}
    </div>
  );
};
