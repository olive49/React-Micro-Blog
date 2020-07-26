import React, { Component } from "react";
import Button from "@material-ui/core/Button";

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
      id: new Date() + "",
      text: this.state.newTweet,
      userName: "olive497",
    });
    this.setState({ newTweet: "" });
  }

  render() {
    return (
      <div>
          <form onSubmit={(event) => this.handleOnSubmit(event)} className="form">
            <textarea
              className="text-field"
              placeholder="What you have in mind..."
              value={this.state.newTweet}
              onChange={(event) => this.onChange(event)}
              required
            />
            
            <button className="tweet-button" type="submit" disabled={this.state.chars_left>this.state.max_chars}>
              Tweet
            </button>
          </form>
      </div>
    );
  }
}

export default CreateTweet;
