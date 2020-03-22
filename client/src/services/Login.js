import endpoint from "./endpoint";


let url = '/signin'
export default {
    post(data){
     return endpoint.post(url,data)
    }
}