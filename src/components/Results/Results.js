import React, { Component } from "react";
import "./Results.css";
import API from "../../utils/API";
import Search from "../Search/Search";

class Results extends Component {
  //initial state
  state = {
    search: "",
    results: [],
    sort: "",
  };

  //when this component mounts, run api call 
  componentDidMount() {
    API.search()
      .then(res => {
        console.log(res)
        this.setState({ results: res.data.results })
      }).catch(err => console.log(err))
  };

  //handle input for search bar
  handleInputChange = event => {
    if (event.target.name === "search") {
      const searchName = event.target.value.toLowerCase();
      this.setState({
        search: searchName
      });
    }
  };

  // sort by first name
  firstName = () => {
    const employees = this.state.results.sort((a, b) => {
      const nameA = a.name.first;
      const nameB = b.name.first;
      if (nameB > nameA) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }
      return 0;
    });

    if (this.state.sort === "DESC") {
      employees.reverse();
      this.setState({ sort: "ASC" });
    } else {
      this.setState({ sort: "DESC" })
    }
    this.setState({ results: employees })
  }

  lastName = () => {
    const employees = this.state.results.sort((a, b) => {
      const nameA = a.name.last;
      const nameB = b.name.last;

      if (nameB > nameA) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }
      return 0;
    });

    if (this.state.sort === "DESC") {
      employees.reverse();
      this.setState({ sort: "ASC" });
    } else {
      this.setState({ sort: "DESC" })
    }
    this.setState({ results: employees })
  };

  render() {
    return (
      <main>
        <div className="container">
          <Search handleInputChange={this.handleInputChange} search={this.state.search} />
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">First name<span className="arrow" onClick={this.firstName}></span></th>
                <th scope="col">Last name<span className="arrow" onClick={this.lastName}></span></th>
                <th scope="col">Phone number</th>
                <th scope="col">Email</th>
              </tr>
            </thead>

            {this.state.results && this.state.results.map(item =>
              item.name.first.toLowerCase().includes(this.state.search) ?
                <tbody key={item.login.uuid}>
                  <tr>
                    <td ><img src={item.picture.thumbnail} className=" image rounded-circle shadow-3-strong mb-4" alt="thumbnail" /></td>
                    <td >{item.name.first}</td>
                    <td >{item.name.last}</td>
                    <td >{item.phone}</td>
                    <td >{item.email}</td>
                  </tr>
                </tbody>
                :
                item.name.last.toLowerCase().includes(this.state.search) ?
                  <tbody key={item.login.uuid}>
                    <tr>
                      <td ><img src={item.picture.thumbnail} className="rounded-circle rounded-circle shadow-3-strong mb-4" alt="thumbnail" /></td>
                      <td >{item.name.first}</td>
                      <td >{item.name.last}</td>
                      <td >{item.phone} </td>
                      <td >{item.email}</td>
                    </tr>
                  </tbody>
                  :
                  null
            )}
          </table>
        </div>
      </main>
    )
  }
}

export default Results;