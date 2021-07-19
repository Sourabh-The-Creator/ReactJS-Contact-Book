import { ADD_USER, UPDATE_USER, DELETE_USER } from "../Actions/Constants";

const initialState = {
  users: [],
};

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        users: [...state.users, action.data],
      };

    case UPDATE_USER:
      return {
        ...state.users,
        users: state.users.map((user) =>
          user.id === action.data.id ? action.data : user
        ),
      };
    case DELETE_USER:
      let arr = state.users.filter((user) => user.id !== action.data);
      arr.map((user, index) => (user.id = index));
      return {
        ...state,
        users: arr,
      };

    default:
      return state;
  }
}
