import React, { useState, useContext } from "react";
import TweetsContext from "../TweetsContext.js";
import { Link } from "react-router-dom";

const UpdateProfile = (props) => {
  const [userName, setUserName] = useState(null);
  const [userId, setUserId] = useState(null);
  const [userPhoto, setUserPhoto] = useState(null);

  const myContext = useContext(TweetsContext);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onUpdateUsername = (e) => {
    setUserName(e.target.value);
  };

  const onUpdateId = (e) => {
    setUserId(e.target.value);
  };

  const onUpdatePhoto = (e) => {
    setUserPhoto(e.target.value);
  };

  return (
    <div className="profile">
      <h2>Profile</h2>
      <div className="user-input">
        <span>User Name</span>
        <form
          className="user-input"
          onSubmit={(e) => onSubmit(e, myContext.usersArray)}
        >
          <textarea
            className="profile-input"
            // onChange={(e) => onChangeUserName(e)}
            // value={itemChangeText}
            required
          />
          <span>User ID</span>
          <textarea
            className="profile-input"
            // onChange={(e) => onChangeUserName(e)}
            // value={itemChangeText}
            required
          />
          <span>Photo URL</span>
          <textarea
            className="profile-input"
            // onChange={(e) => onChangeUserName(e)}
            // value={itemChangeText}
            required
          />
          <div className="update-profile-button">
            <button type="submit">Update Profile</button>
          </div>
        </form>
      </div>
      <span>
        Don't have an account?
        <button>
          <Link to="/signup">Sign Up</Link>
        </button>
      </span>
    </div>
    // </div>
  );
};

export default UpdateProfile;
