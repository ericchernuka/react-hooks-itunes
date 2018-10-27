import React from "react";
import { createResource } from "./createResource";

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

const AlbumsResource = createResource(searchTerm =>
  wait(2000).then(() =>
    fetch(
      `https://itunes.apple.com/search?term=${searchTerm}&media=music&entity=album`
    )
      .then(res => res.json())
      .then(data => data.results)
  )
);

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
