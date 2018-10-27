import React from "react";
import AlbumsResource from "./resources/AlbumsResource";

const AlbumList = ({ searchTerm }) => {
  const hasSearchTerm = searchTerm.length > 0;

  if (!hasSearchTerm) {
    return <div>Use the search above</div>;
  }

  const albums = AlbumsResource.read(searchTerm);

  if (albums.length === 0 && hasSearchTerm) {
    return <div>No results</div>;
  }

  return (
    <ul>
      {albums.map(album => (
        <li key={album.collectionId}>{album.collectionName}</li>
      ))}
    </ul>
  );
};

export default AlbumList;
