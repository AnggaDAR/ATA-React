import React, { Component } from 'react';

class StoryItem extends Component {
  render() {
    return (
      <div className="card mb-3">
        <img src={this.props.img} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title"><a href={this.props.url}>{this.props.title}</a></h5>
          <p className="card-text"><small className="text-muted">Published at {this.props.published_at} by {this.props.author}</small></p>
          <p className="card-text">{this.props.description}..</p>
        </div>
      </div>
    );
  }
}

export default StoryItem;
