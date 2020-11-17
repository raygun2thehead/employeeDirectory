import React from "react";
import Navbar from "./components/Nav";
import Wrapper from "./components/Wrapper";
import SearchResults from "./components/SearchResults"

function App() {
  return (
      <div>
        <Navbar />
        <Wrapper>
        <SearchResults />
        </Wrapper>
      </div>
  );
}

export default App;

