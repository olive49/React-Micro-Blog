import React, { useState, useContext, useEffect } from "react";
import TweetsContext from "../TweetsContext.js";


const CreateTweet = (props) => {

  const [newTweet, setNewTweet] = useState("")
  const [max_chars] = useState(140);

  const myContext = useContext(TweetsContext)

  console.log(myContext)
  
  const onChange = (event) => {
    setNewTweet(event.target.value)
  }


  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.onNewTweet({
      content: newTweet,
      userName: myContext.currentUser.displayName,
      date: new Date().toISOString(),
      id: Date.now(),
      photo: myContext.currentUser.imageUrl
    });
    setNewTweet("")
  }

    return (
          <div>
            <form
              onSubmit={(event) => handleOnSubmit(event)}
              className="form"
            >
              <textarea
                className="text-field"
                placeholder="What you have in mind..."
                value={newTweet}
                onChange={(event) => onChange(event)}
                required
              />
              <div className="card-footer">
                <span
                  className="tweet-error"
                  style={{
                    display:
                      newTweet.length > max_chars
                        ? "inline-block"
                        : "none",
                  }}
                >
                  The tweet can't contain more than 140 chars.
                </span>
                <button
                  className="tweet-button"
                  style={{
                    color:
                      newTweet.length > max_chars ||
                      props.loading
                        ? "gray"
                        : "white",
                  }}
                  type="submit"
                  disabled={
                    newTweet.length > max_chars ||
                    props.loading
                  }
                >
                  Tweet
                </button>
              </div>
            </form>
          </div>
    );
  }

export default CreateTweet;
