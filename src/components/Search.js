import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div class="col-4 my-2">
        <form class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
