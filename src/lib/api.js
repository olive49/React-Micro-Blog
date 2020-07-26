import axios from 'axios';

const baseUrl = "https://itc-bootcamp-19.ew.r.appspot.com/"

// export function getTweets() {
//     return axios.get()
    //axios is an object that has methods
    //axios.get returns a promise
// }

export function setTweets(tweet){
    return axios.post(`${baseUrl}tweet`, tweet)

}