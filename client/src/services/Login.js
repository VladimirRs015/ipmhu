// import endpoint from "./endpoint";
import axios from 'axios'
let url = '/signin'
// let axiosConfig = {
//     withCredentials : true , 
//     headers : {
//       'Content-Type' : 'application/json', 
//       'Access-Control-Allow-Origin' : 'http://localhost:4000',
//       'Access-Controll-Allow-Methods' : 'GET PUT UPDATE DELETE'
//     }
//   }

const endpoint = 'http://localhost:4000'
  
  
export default {
    post(data){
          const options = {
            method: 'POST',
            headers : {
                'Content-Type' : 'application/json', 
                'Access-Control-Allow-Origin' : 'http://localhost:4000',
                'Access-Controll-Allow-Methods' : 'GET PUT UPDATE DELETE'
              },
            data:data  ,
            url : endpoint + url    
          };
          return axios(options);
    }
}