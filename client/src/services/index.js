import { get } from "axios";
import { post } from "axios";
import { patch } from "axios";
import axios from "axios";
import { SET_USERS } from "../actions";

export function setUsers() {
  return function (dispatch) {
    return get("/api/users")
      .then(function (response) {
        dispatch({ type: SET_USERS, users: response.data });
      })
      .catch(function (error) {
        console.log("error", error);
      });
  };
}

export function postUser(name, content) {
  return function () {
    return post("/api/users", {
      name: name,
      content: content,
    });
  };
}

export function editUser(id, name, content) {
  return function () {
    return patch(`/api/users/${id}`, {
      name: name,
      content: content,
    });
  };
}

export function setUserView(id) {
  return function () {
    return axios.get(`/api/users/${id}`);
  };
}

export function deleteUser(id) {
  return function () {
    return axios.delete(`/api/users/${id}`);
  };
}
