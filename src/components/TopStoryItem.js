import React, { Component } from 'react';

class TopStory extends Component {
  render() {
    return (
        <li className="list-group-item m-0">
            <a className="nav-link" data-toggle="pill" href={this.props.url} role="tab" >{this.props.title}</a>
        </li>
    );
  }
}

export default TopStory;
