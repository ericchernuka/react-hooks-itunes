import { createResource } from "./createResource";

// artificial delay
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

const AlbumsResource = createResource(searchTerm =>
  wait(1000).then(() =>
    fetch(
      `https://itunes.apple.com/search?term=${searchTerm}&media=music&entity=album`
    )
      .then(res => res.json())
      .then(data => data.results)
  )
);

export default AlbumsResource;
