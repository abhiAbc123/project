import axios from "axios";

const API = axios.create({
   baseURL: "http://localhost:8000/api"
});

export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};

const token = localStorage.getItem("token");
if (token) setAuthToken(token);


export const signupUser = (data) => API.post("/auth/signup", data);
export const loginUser = (data) => API.post("/auth/login", data);

export const getCurrentUser = () => API.get("/auth/me");


export default API;