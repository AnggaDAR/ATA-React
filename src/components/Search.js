import React, { Component } from 'react';

class Search extends Component {

  render() {
    return (
      <div className="col-3 my-2">
        <input className="form-control" onChange={this.props.handleChange} type="search" placeholder="Search" />
      </div>
    );
  }
}

export default Search;
