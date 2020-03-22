import endpoint from './endpoint'
const url = '/news'

export default{
  get(){
    return endpoint.get(url)
  }
}