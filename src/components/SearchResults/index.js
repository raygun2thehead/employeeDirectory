import React, { Component } from "react";
// import SearchBox from "../SearchBox";
import Table from "../Table"
import Navbar from "../Nav";
// import Wrapper from "./components/Wrapper";



class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      lastName: [],
      results: [],
      error: ""
    };
  }
  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    fetch("https://randomuser.me/api/?results=200&nat=us")
      .then(res => res.json())
      .then(json => json.results)
      .then(results => this.setState({ 'results': results }))
  }

  handleInputChange = event => {
    console.log(event.target.value) 
    const filter = event.target.value;
    const filteredList = this.state.results.filter(item => {
        let values = Object.values(item)
            .join("")
            .toLowerCase();
        return values.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({ filteredUsers: filteredList });
  }
  //   handleFormSubmit = event => {
  //     event.preventDefault();
  //     fetch("https://randomuser.me/api/?results=200&nat=us")
  //     .then(res => {
  //         if (res.data.status === "error") {
  //           throw new Error(res.data.message);
  //         }
  //         this.setState({ results: res.data.message, error: "" });
  //       })
  //       .catch(err => this.setState({ error: err.message }));
  //   };
  render() {
    return (
      <>
      <Navbar handleInputChange={this.handleInputChange} />
      <div>
        <Table results={this.state.results} />
        {/* <ResultList employee={this.state.employee}/> */}
      </div>
      </>
    );
  }
}

export default SearchResults;

