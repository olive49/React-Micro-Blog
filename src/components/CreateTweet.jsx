import React, { Component } from "react";
import UserNameContext from "../UserNameContext.js";

class CreateTweet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTweet: "",
      chars_left: null,
      max_chars: 140,
    };
  }

  onChange(event) {
    const charCount = event.target.value.length;
    this.setState({
      chars_left: charCount,
      newTweet: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.onNewTweet({
      content: this.state.newTweet,
      userName: this.props.userName,
      date: new Date().toISOString(),
      id: Date.now(),
    });
    this.setState({ newTweet: "" });
  }

  render() {
    return (
      <UserNameContext>
        {(context) => (
          <div>
            <form
              onSubmit={(event) => this.handleOnSubmit(event)}
              className="form"
            >
              <textarea
                className="text-field"
                placeholder="What you have in mind..."
                value={this.state.newTweet}
                onChange={(event) => this.onChange(event)}
                required
              />
              <div className="card-footer">
                <span
                  className="tweet-error"
                  style={{
                    display:
                      this.state.chars_left > this.state.max_chars
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
                      this.state.chars_left > this.state.max_chars ||
                      this.props.loading
                        ? "gray"
                        : "white",
                  }}
                  type="submit"
                  disabled={
                    this.state.chars_left > this.state.max_chars ||
                    this.props.loading
                  }
                >
                  Tweet
                </button>
              </div>
            </form>
          </div>
        )}
      </UserNameContext>
    );
  }
}

export default CreateTweet;
