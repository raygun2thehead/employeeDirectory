import React from "react";
import "./style.css";
import SearchBox from "../SearchBox"

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar({ handleInputChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        Employees
      <div>
        <SearchBox handleInputChange={handleInputChange}/>
      </div>
    </nav>
  );
}

export default Navbar;
