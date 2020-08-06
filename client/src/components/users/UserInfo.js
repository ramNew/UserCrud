import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserView } from "../../services";
import { deleteUser } from "../../services";
import { Link } from "react-router-dom";
import { setUser, removeUser } from "../../actions";

function UserInfo(props) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(
    function () {
      dispatch(setUserView(props.match.params._id))
        .then(function (response) {
          dispatch(setUser(response.data));
        })
        .catch(function (error) {
          console.log("error", error);
        });
    },
    [dispatch, props]
  );

  function handleDelete() {
    dispatch(deleteUser(user._id))
      .then(function () {
        dispatch(removeUser(user._id));
        props.history.push("/");
      })
      .catch(function (error) {
        console.log("error", error);
      });
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <small>id: {user._id}</small>
      <p>{user.content}</p>
      <div className="btn-group">
        <Link
          to={{ pathname: `/users/${user._id}/edit` }}
          className="btn btn-info"
        >
          Edit
        </Link>
        <button className="btn btn-danger" type="button" onClick={handleDelete}>
          Delete
        </button>
        <Link to="/" className="btn btn-secondary">
          Close
        </Link>
      </div>
      <hr />
    </div>
  );
}

export default UserInfo;
