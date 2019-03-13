import createStore from "unistore";
import axios from "axios";
// import { connect } from "tls";

const initialState = {
    apiKey: "",
    email: "",
    fullname: "",
    username: "",
    password: "",
    isLogin: false,
    listStory: [],
    listTopStory: [],
}
const baseUrl = "https://newsapi.org/v2/"
const apiKey = "1656f1c901ff4247b4beb9bee62e70db"
const headlinesUrl = baseUrl + "top-headlines"
const allArticleUrl = baseUrl + "everything"

export const store = createStore(initialState);

export const actions = store => ({
    setField: (state, event) => {
        return {[event.target.name]: event.target.value};
    },
    postLogout: state => {
        return {isLogin: false};
    },
    postLogin: async state => {
        const data = {username: state.username, password: state.password};
        await axios
        .post("https://adar2.free.beeceptor.com/login", data)
        .then(response => {
            console.log("postLogin res: ", response.data);
            if (response.data.hasOwnProperty("api_key")){
                store.setState({
                    isLogin: true,
                    apiKey: response.data.api_key,
                    email: response.data.email,
                    fullname: response.data.full_name,
                })
            }
            console.log("postLog res: ", store.getState());
        })
        .catch(function(error){
            console.log(error)
        });
    },
    searchNews(state, value){
        console.log("val : " + value)
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
        store.setState({listStory: response.data.articles});
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
                language : "en",
                pageSize: 5,
            }
        })
        .then(function(response){
            console.log(response.data)
            store.setState({listTopStory: response.data.articles})
        })
        .catch(function(error){
            console.log(error)
        })
    }
})
