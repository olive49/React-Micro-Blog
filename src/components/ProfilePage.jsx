import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemChangeText: this.props.userName,
    };
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onNewUserName(this.state.itemChangeText);
  }

  onChange(e) {
    console.log(e);
    this.setState({ itemChangeText: e.target.value });
    console.log(this.state.itemChangeText)
  }

  render() {
    console.log(this.props.userName);
    return (
      <div className="profile">
        <h2>Profile</h2>
        <div className="user-input">
          <span>UserName</span>
          <form className="user-input" onSubmit={(e) => this.onSubmit(e)}>
            <textarea
              className="profile-input"
              onChange={(e) => this.onChange(e)}
              value={this.state.itemChangeText}
            />
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Profile;
