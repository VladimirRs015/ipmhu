import axios from "axios";
const base_URL = "https://randomuser.me/api/";
// const temporal = "https://jsonplaceholder.typicode.com/users";
export default axios.create({
  base_URL
});
