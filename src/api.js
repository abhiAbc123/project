import axios from "axios";

// Base API instance
const API = axios.create({
   baseURL: "http://localhost:8000/api"
});

// Attach JWT token to requests
export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};

// Automatically attach token from localStorage on app start
const token = localStorage.getItem("token");
if (token) setAuthToken(token);

// =====================
// Auth routes
// =====================
export const signupUser = (data) => API.post("/auth/signup", data);
export const loginUser = (data) => API.post("/auth/login", data);

export const getCurrentUser = () => API.get("/auth/me");


// =====================
// Export API instance
// =====================
export default API;