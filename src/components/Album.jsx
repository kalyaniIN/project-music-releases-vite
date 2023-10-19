import { AlbumName } from "./Album/AlbumName";

export const Album = ({ albumData }) => {
  const {name} = albumData

  return (
    <div className="album">
      <AlbumName albumName={name} />
    </div>
  );
};
