import React, { Component } from "react";
import API from "../../utils/API";
import ResultList from "../DataBody";
// import SearchBox from "../SearchBox";
// import SearchResults from "../components/SearchResults";
// import DataTable from "../DataTable"

class Search extends Component {
  state = {
    search: "",
    employee: [],
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getUsers()
      .then(res => this.setState({ employee: res.data.results }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     API.getDogsOfBreed(this.state.search)
//       .then(res => {
//         if (res.data.status === "error") {
//           throw new Error(res.data.message);
//         }
//         this.setState({ results: res.data.message, error: "" });
//       })
//       .catch(err => this.setState({ error: err.message }));
//   };
  render() {
    return (
      <div>
        {/* <DataTable employee={this.state.employee}/> */}
        <ResultList employee={this.state.employee}/>
      </div>
    );
  }
}

export default Search;