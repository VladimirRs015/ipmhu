import axios from "axios";
const baseURL = "http://localhost:4000";
// let axiosHeaders = {
//  ,
// };
export default new axios({
  baseURL, 
  headers: {
    withCredentials: true,
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:4000",
    "Access-Controll-Allow-Methods": "GET PUT UPDATE DELETE"
  },

})  

class UserService {
  getUser() {
      const token = localStorage.getItem('token');
      return axios.get('/api/user', {
          headers: {
              'Authorization': 'Bearer ' + token
          }
      }).then(function (response) {
          return response.data;
      }).catch(function (error) {
          console.log(error);
      });
  }
  getUserTasks() {
      const token = localStorage.getItem('token');
      return axios.get('/api/user/task', {
          headers: {
              'Authorization': 'Bearer ' + token
          }
      }).then(response => {
          return response;
      }).catch(function (error) {
          console.log(error);
      });
  }
  get currentUser() {
      return this.getUser();
  }
}
 UserService