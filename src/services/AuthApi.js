import axios from "axios";
import jwtDecode from "jwt-decode";
import { getItem, addItem, removeItem } from "./LocalStorage";

export function hasAuthenticated() {
  const token = getItem("streamyToken");
  const result = token ? tokenIsValid : false;

  if (result === false) {
    removeItem("streamyToken");
  }
  return result;
}

export function login(credentials) {
  return axios
    .get("http://localhost:3001/api/get", credentials)
    .then((response) => response.data.token);
}

export function logout() {
  removeItem("streamyToken");
}

export function tokenIsValid(token) {
  const { exp } = jwtDecode(token);

  if (exp * 1000 > new Date().getTime()) {
    return true;
  }

  return false;
}
