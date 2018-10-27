import React, { Suspense, useState } from "react";
import AlbumList from "./AlbumList";
import Search from "./Search";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Search onSearch={setSearchTerm} />
      <Suspense maxDuration={300} fallback={"loading..."}>
        <AlbumList searchTerm={searchTerm} />
      </Suspense>
    </>
  );
};

export default App;
