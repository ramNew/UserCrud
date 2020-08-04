import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { post } from "axios";
import { addUser } from "../../actions";

function UserAdd(props) {
  const initialState = { username: "", content: "" };
  const [user, setFields] = useState(initialState);
  const dispatch = useDispatch();

  function handleChange(event) {
    setFields({ ...user, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!user.username || !user.content) return;
    post("/api/users", { name: user.username, content: user.content })
      .then(function (response) {
        dispatch(addUser(response.data));
      })
      .then(function () {
        props.history.push("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function handleCancel() {
    props.history.push("/");
  }

  return (
    <div>
      <h4>Add User</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="username"
            required
            value={user.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <textarea
            name="content"
            rows="5"
            required
            value={user.content}
            onChange={handleChange}
            className="form-control"
            placeholder="Content"
          />
        </div>
        <div className="btn-group">
          <input type="submit" value="Submit" className="btn btn-primary" />
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

export default UserAdd;
