import { ADD_USER, UPDATE_USER, DELETE_USER } from "./Constants";
export const addUser = (User) => ({
  type: ADD_USER,
  data: User,
});
export const updateUser = (user) => ({
  type: UPDATE_USER,
  data: user,
});
export const deleteUser = (id) => ({
  type: DELETE_USER,
  data: id,
});
