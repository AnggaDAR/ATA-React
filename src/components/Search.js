import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div className="col-4 my-2">
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
