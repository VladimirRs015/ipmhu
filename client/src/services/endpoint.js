import axios from "axios";
const base_URL = "http://localhost:4000";
let axiosConfig = {
  withCredentials : true , 
  headers : {
    'Content-Type' : 'application/json', 
    'Access-Control-Allow-Origin' : 'http://localhost:4000',
    'Access-Controll-Allow-Methods' : 'GET PUT UPDATE DELETE'
  }
}

axios.defaults.headers.common
console.log(
axios.defaults.headers.common,
axiosConfig)
// console.log(axios.defaults.headers.common)

export default axios.create({
  base_URL,
  
});
