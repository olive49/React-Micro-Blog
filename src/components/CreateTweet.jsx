import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
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
      id: Date.now(),
      text: this.state.newTweet,
    });
    this.setState({ newTweet: "" });
  }

  render() {
    return (
      <div>
        <Card className="Card">
          <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <TextField
              id="outlined-basic"
              label="What you have in mind..."
              multiline
              rows={10}
              variant="outlined"
              value={this.state.newTweet}
              onChange={(event) => this.onChange(event)}
            />
            <Button variant="contained" color="primary" type="submit" disabled={this.state.chars_left>this.state.max_chars}>
              Tweet
            </Button>
          </form>
        </Card>
      </div>
    );
  }
}

export default CreateTweet;
