import React from "react";
import Navbar from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Main from "./components/Main"

function App() {
  return (
      <div>
        <Navbar />
        <Wrapper>
        <Main />
        </Wrapper>
      </div>
  );
}

export default App;

