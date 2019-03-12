import React, { Component } from 'react';

class TopStory extends Component {
  render() {
    return (
        <li className="list-group-item m-0">
            <a className="nav-link" href={this.props.url} >{this.props.title}</a>
        </li>
    );
  }
}

export default TopStory;
