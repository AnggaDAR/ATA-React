import React, { Component } from 'react';
import axios from 'axios';
import StoryItem from './StoryItem';

const baseUrl = "https://newsapi.org/v2/everything"
const apiKey = "1656f1c901ff4247b4beb9bee62e70db"
 
class StoryList extends Component {
  constructor(props){
    super(props);
    this.state = {listStory: []};
  }
  componentDidMount = () => {
    const self = this;
    axios
    .get(baseUrl, {
      params:{
        apiKey : apiKey,
        language : "en",
        q : "a",
      }
    })
    .then(function(response){
      console.log(response.data)
      self.setState({listStory: response.data.articles});
    })
    .catch(function(error){
      console.log(error)
    })
  }
  render() {
    const {listStory} = this.state;
    return (
      <div className="col-8">
        {listStory.map((item, key) => {
          const img = item.urlToImage;
          const url = item.url;
          const title = item.title;
          const author = item.author;
          const description = item.description;
          const published_at = item.publishedAt;
          return <StoryItem key={key} url={url} img={img} title={title} author={author} description={description} published_at={published_at} />
        })}
      </div>
    );
  }
}

export default StoryList;
