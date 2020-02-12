import axios from "axios";
const base_URL = "http://localhost:4000";
let axiosHeaders = {
  headers: {
    withCredentials: true,
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:4000",
    "Access-Controll-Allow-Methods": "GET PUT UPDATE DELETE"
  }
};

export default {
  axios, 
  base_URL , 
  headers : axiosHeaders.headers ,
}