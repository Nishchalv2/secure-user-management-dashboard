import axios from "axios";

const API_URL = "https://reqres.in/api";

// Login Service
export const signIn = async (email: string, password: string) => {
  return await axios.post(`${API_URL}/login`, { email, password });
};

// Register Service
export const signUp = async (email: string, password: string) => {
  return await axios.post(`${API_URL}/register`, { email, password });
};
