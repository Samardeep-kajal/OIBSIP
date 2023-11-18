import axios from "axios";
import { toast } from "react-toastify";

export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });
  try {
    const res = await axios.post("/api/user/register", user);
    dispatch({ type: "USER_REGISTER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAIL", payload: error });
  }
};

export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });
  try {
    const response = await axios.post("/api/user/login", user);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data });
    localStorage.setItem("currentUser", JSON.stringify(response.data));
    window.location.href = "/explore";
    toast.success("Login Successful!");
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAIL", payload: error });
    toast.error("Invalid Credentials!");
  }
};

export const logoutUser = () => async (dispatch) => {
  localStorage.removeItem("currentUser");
  window.location.href = "/";
};

export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: "GET_USERS_REQUEST" });
  try {
    const res = await axios.get("/api/user/allusers");
    dispatch({ type: "GET_USERS_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_USERS_FAIL", payload: err });
  }
};

export const deleteUser = (userid) => async (dispatch) => {
  try {
    const res = await axios.post("/api/user/deleteuser", { userid });
    toast.success("User Deleted!");
    window.location.href = "/admin/userlist";
  } catch (error) {
    toast.error("Oops! Some error occured.");
  }
};
