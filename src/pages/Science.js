import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom'

// import Header from "../components/Header"
// import Footer from "../components/Footer"
import TopStory from "../components/TopStory"
import StoryList from "../components/StoryList"
// import Search from "../components/Search"
// import '../styles/gallery.css'

const baseUrl = "https://newsapi.org/v2/"
const apiKey = "1656f1c901ff4247b4beb9bee62e70db"
const headlinesUrl = baseUrl + "top-headlines"
const allArticleUrl = baseUrl + "everything"

class Article extends Component {
    constructor(props){
        super(props);
        this.state = {
            listStory: [],
            listTopStory: [],
        };
    
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        this.searchNews("Science")
    }
    // handleChange(event){
    //     this.searchNews(event.target.value);
    // }
    searchNews(value){
        console.log("val : " + value)
        const self = this;
        // For All Article
        axios
        .get(allArticleUrl, {
        params:{
            apiKey : apiKey,
            // language : "en",
            q : value,
        }
        })
        .then(function(response){
        console.log(response.data)
        self.setState({listStory: response.data.articles});
        })
        .catch(function(error){
        console.log(error)
        })
        // For Top Headlines
        axios
        .get(headlinesUrl, {
            params: {
                apiKey: apiKey,
                q: value,
                category: "Science",
                language : "en",
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
        const is_login = JSON.parse(localStorage.getItem("is_login"));

        if(is_login === null){
            alert("Anda belum login, silakan login dulu!")
            return <Redirect to={{pathname: "/login"}} />
        } else {
            return (
                <div>
                    <section className="article m-5">
                        {/* <div className="row justify-content-end">
                            <Search handleChange = {this.handleChange}/>
                        </div> */}
                        <div className="row">
                            <TopStory listTopStory = {this.state.listTopStory} />
                            <StoryList listStory = {this.state.listStory} />
                        </div>
                    </section>
                </div>
            );
        }
    }
}

export default Article;
