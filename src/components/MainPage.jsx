import React, { Component } from 'react';
import CreateTweet from "./CreateTweet"
import TweetList from "./TweetList"

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tweets: [],
            storedTweets: "",
        }
    }

    handleNewTweet(newTweet){
        console.log(newTweet);
        this.setState((state) => {
            return {
                tweets: [newTweet, ...this.state.tweets]
            }
        })
        localStorage.setItem('tweet', JSON.stringify(this.state.tweets))
    }

    componentDidMount () {
        this.state.storedTweets = JSON.parse(localStorage.getItem('tweet'))
        console.log(this.state.storedTweets)
  
        if (localStorage.getItem('tweet')){
            this.setState({
                tweets: this.state.storedTweets
            })
        }
    }

    render() { 
        console.log(this.state.tweets)
        return ( 
        <div>
            <CreateTweet
            onNewTweet={(newTweet) => this.handleNewTweet(newTweet)}
            />
            <TweetList
            tweets={this.state.tweets}
            />
        </div> );
    }
}
 
export default MainPage;