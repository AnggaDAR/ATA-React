import React, { Component } from 'react';
import StoryItem from './StoryItem';
import image from '../images/alphatech.png'

class StoryList extends Component {

  render() {
    const listStory = this.props.listStory;
    return (
      <div className="col-8">
        {listStory.map((item, key) => {
          const img = item.urlToImage;
          const url = item.url;
          const title = item.title;
          const author = item.author;
          const description = item.description;
          const published_at = item.publishedAt;
          return <StoryItem key={key} url={url} img={img !== "" ? img : image} title={title} author={author} description={description} published_at={published_at} />
        })}
      </div>
    );
  }
}

export default StoryList;
