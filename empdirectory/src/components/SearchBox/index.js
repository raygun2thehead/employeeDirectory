import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchBox(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="lastName">Last Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="lastName"
          list="lastNames"
          type="text"
          className="form-control"
          placeholder="Search employees by last"
          id="lastName"
        />
        {/* <datalist id="lastNames">
          {props.lastNames.map(lastName => (
            <option value={lastName} key={lastName} />
          ))}
        </datalist> */}
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBox;
