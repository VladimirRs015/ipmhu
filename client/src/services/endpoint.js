import axios from "axios";
const base_URL = "http://localhost/";

export default axios.create({
  base_URL
});
