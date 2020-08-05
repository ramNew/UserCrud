import { SET_USERS, ADD_USER, REMOVE_USER, REPLACE_USER } from "../actions";

const initialState = { users: [] };
export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      return action.users;
    case ADD_USER:
      return [action.user, ...state];
    case REMOVE_USER:
      return state.filter((user) => user._id !== action._id);
    case REPLACE_USER:
      return state.map(function (user) {
        if (user._id === action.user._id) {
          return {
            ...user,
            name: action.user.name,
            content: action.user.content,
          };
        } else return user;
      });
    default:
      return state;
  }
}
