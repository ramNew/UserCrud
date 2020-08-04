import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { patch } from "axios";
import { setUser, replaceUser } from "../../actions";

function UserEdit(props) {
  const initialState = useSelector((state) => state.user);
  let [user, changeUser] = useState(initialState);
  const dispatch = useDispatch();

  function handleChange(event) {
    changeUser({ ...user, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!user.username || !user.content) return;
    patch(`/api/users/${user._id}`, {
      name: user.username,
      content: user.content,
    })
      .then(function (response) {
        dispatch(setUser(user));
        dispatch(replaceUser(user));
      })
      .then(function () {
        props.history.push(`/users/${user._id}`);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function handleCancel() {
    props.history.push(`/users/${user._id}`);
  }

  return (
    <div>
      <h1>Edit {user.name}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>User</label>
          <input
            type="text"
            name="username"
            defaultValue={user.name}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea
            name="content"
            rows="5"
            defaultValue={user.content}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="btn-group">
          <button type="submit" className="btn btn-primary">
            Update
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="btn btn-secondary"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserEdit;
