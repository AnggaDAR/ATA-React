import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom'

// import Header from "../components/Header"
// import Footer from "../components/Footer"
import TopStory from "../components/TopStory"
import StoryList from "../components/StoryList"
import Search from "../components/Search"
import { connect } from "unistore/react"
import { actions } from "../store"

// import '../styles/gallery.css'

const baseUrl = "https://newsapi.org/v2/"
const apiKey = "1656f1c901ff4247b4beb9bee62e70db"
const headlinesUrl = baseUrl + "top-headlines"
const allArticleUrl = baseUrl + "everything"

class Article extends Component {
    constructor(props){
        super(props);
        // this.state = {
        //     listStory: [],
        //     listTopStory: [],
        // };
    
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.searchNews("a")
    }
    handleChange(event){
        this.props.searchNews(event.target.value);
    }
    
    
    render() {
        // const isLogin = JSON.parse(localStorage.getItem("isLogin"));

        if(!this.props.isLogin){
            alert("Anda belum login, silakan login dulu!")
            return <Redirect to={{pathname: "/login"}} />
        } else {
            return (
                <div>
                    {/* <Header/> */}
                    <section className="article m-5">
                        <div className="row justify-content-end">
                            <Search handleChange = {this.handleChange}/>
                        </div>
                        <div className="row">
                            <TopStory listTopStory = {this.props.listTopStory} />
                            <StoryList listStory = {this.props.listStory} />
                        </div>
                    </section>
                    {/* <Footer/> */}
                </div>
            );
        }
    }
}

// export default Article;
export default connect("isLogin,listTopStory,listStory",actions)(Article);
