import Axios from 'axios';

// Base URL for the API
const API_BASE_URL = "";

// Function to handle user signup
export const authenticateSignup = async (details) => {
  try {
    const response = await Axios.post(`${API_BASE_URL}/signup`, details);
    return response;
  } catch (err) {
    console.error("Error while calling signup API", err);
    throw err; // Re-throw the error for further handling
  }
};

// Function to handle user login
export const authenticateLogin = async (details) => {
  try {
    const response = await Axios.post(`${API_BASE_URL}/login`, details);
    return response;
  } catch (err) {
    console.error("Error while calling login API", err);
    throw err; // Re-throw the error for further handling
  }
};

// Function to fetch products
export const products = async () => {
  try {
    const response = await Axios.get(`${API_BASE_URL}/products`);
    return response.data;
  } catch (err) {
    console.error("Error while fetching products", err);
    throw err; // Re-throw the error for further handling
  }
};

// Function to add an item to the cart
export const addcart = async (data) => {
  try {
    const response = await Axios.post(`${API_BASE_URL}/cart`, data);
    return response;
  } catch (err) {
    console.error("Error while adding item to cart", err);
    throw err; // Re-throw the error for further handling
  }
};
