import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function UserList() {
  const users = useSelector((state) => {
    return state.users;
  });
  return (
    <div>
      <h2>
        Users
        <Link to="/users/new" className="btn btn-primary float-right">
          Create Users
        </Link>
      </h2>
      {users.length &&
        users.map(function (user) {
          return (
            <div key={user._id}>
              <hr />
              <h4>
                <Link to={`/users/${user._id}`}>{user.name}</Link>
              </h4>
              <small>id: {user._id}</small>
            </div>
          );
        })}
    </div>
  );
}

export default UserList;
