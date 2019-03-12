import React, { Component } from 'react';
import TopStoryItem from './TopStoryItem';

class TopStory extends Component {
    
    render() {
        const listTopStory = this.props.listTopStory;
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
