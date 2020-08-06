export const SET_USERS = "SET_USERS";
export const ADD_USER = "ADD_SUSER";
export const SET_USER = "SET_USER";
export const REMOVE_USER = "REMOVE_USER";
export const REPLACE_USER = "REPLACE_USER";

export function addUser(user) {
  return {
    type: ADD_USER,
    user: user,
  };
}

export function setUser(user) {
  return {
    type: SET_USER,
    user: user,
  };
}

export function removeUser(_id) {
  return {
    type: REMOVE_USER,
    _id: _id,
  };
}

export function replaceUser(user) {
  return {
    type: REPLACE_USER,
    user: user,
  };
}
