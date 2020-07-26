import React, { Component } from 'react';
import CreateTweet from "./CreateTweet"
// import TweetList from "./TweetList"

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tweets: []
        }
    }

    handleNewTweet(newTweet){
        console.log(newTweet);
        this.setState((state) => {
            return {
                tweets: [newTweet, ...state.tweets]
            }
        })
    }

    render() { 
        return ( 
        <div>
            <CreateTweet
            onNewTweet={(newTweet) => this.handleNewTweet(newTweet)}
            />
        </div> );
    }
}
 
export default MainPage;