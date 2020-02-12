import endpoint from "./endpoint";

let url = '/signin'
// const config = {
//   url : endpoint.base_URL + url, 
//   headers : endpoint.headers,
//   method : 'POST'
// }
export default {
    post(data){
     return endpoint.axios.post(endpoint.base_URL + url,data,endpoint.headers)
    }
}