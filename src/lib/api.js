import axios from 'axios';

const baseUrl = "https://fullstack-web-course.ew.r.appspot.com"


export function getTweets() {
    return axios.get(`${baseUrl}/tweet`)
}

export function getTweetById(tweetId) {
    return axios.get(`${baseUrl}/tweet/${tweetId}`)
}

export function setTweets(tweet){
    return axios.post(`${baseUrl}/tweet`, tweet)
}