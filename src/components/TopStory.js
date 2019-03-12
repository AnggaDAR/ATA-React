import React, { Component } from 'react';
import axios from 'axios';
import TopStoryItem from './TopStoryItem';

const baseUrl = "https://newsapi.org/v2/"
const apiKey = "1656f1c901ff4247b4beb9bee62e70db"
const headlinesUrl = baseUrl + "top-headlines"
 
class TopStory extends Component {
    constructor(props){
        super(props);
        this.state = {listTopStory: []};
    }
    componentDidMount = () => {
        const self = this;
        axios
        .get(headlinesUrl, {
            params: {
                apiKey: apiKey,
                // country: "id",
                q: "indonesia",
                pageSize: 5,
            }
        })
        .then(function(response){
            console.log(response.data)
            self.setState({listTopStory: response.data.articles})
        })
        .catch(function(error){
            console.log(error)
        })
    }

    render() {
        const {listTopStory} = this.state;
        return (
            <div className="col-4">
                <div className="card">
                    <div className="card-header text-center">
                        Top Story
                    </div>
                    <ul className="list-group list-group-flush">
                        {listTopStory.map((item, key) => {
                            const url = item.url;
                            const title = item.title;
                            return <TopStoryItem key={key} url={url} title={title} />
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default TopStory;
