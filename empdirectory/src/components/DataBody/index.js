import React from "react";

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.employee.map(result => (
        <li className="list-group-item" key={result.cell}>
          <img alt={result.title} className="img-fluid" src={result.picture.thumbnail}/>
      <p className="lastName" name="lastName">{result.name.last}</p>
      <p className="firstName" name="firstName">{result.name.first}</p>
      <p className="cell" name="cell">{result.cell}</p>
      <p className="email" name="email">{result.email}</p>
      <p className="location" name="location">{result.location.city + "," +result.location.state}</p>

        </li>
      ))}
    </ul>
  );
}

export default ResultList;