import React, { Suspense, useState } from "react";
import AlbumList from "./AlbumList";
import Search from "./Search";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Search onSearch={setSearchTerm} searchTerm={searchTerm} />
      <Suspense maxDuration={300} fallback={"loading..."}>
        <AlbumList searchTerm={searchTerm} />
      </Suspense>
    </div>
  );
};

export default App;
