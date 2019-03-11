import React, { Component } from 'react';
import Header from "../components/Header"
import Footer from "../components/Footer"
import TopStory from "../components/TopStory"
import StoryList from "../components/StoryList"
import Search from "../components/Search"
import '../styles/gallery.css'

class Article extends Component {
  render() {
    return (
        <div>
            <Header/>
            <section className="article m-5">
                <div className="row">
                    <Search/>
                </div>
                <div className="row">
                    <TopStory/>
                    <StoryList/>
                </div>
            </section>
            <Footer/>
        </div>
    );
  }
}

export default Article;
