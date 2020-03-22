import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    numPage: 1, 
    AuthorizationToken : '', 
  },
  mutations: {
    nextPage: state => {
      // if(state.numPage)
      return state.numPage++;
    },
    backPage: state => {
      if (state.numPage <= 1) {
        return;
      }
      
      state.numPage--;
    }, 
    setToken : (state,newToken) =>{
      if(newToken){
        return state.AuthorizationToken = newToken;
      }
      else { 
        return state.AuthorizationToken
      }
    },
    skipPages: (state,numpage)=>{
      if(numpage && numpage > 0){
        return state.numPage = numpage
      }
      return 
    }
    
  },
  actions: {
      pages : (context,payload)=>{
        return new Promise((resolve)=>{
          context.commit('skipPages',payload)
          resolve(context.state)
        })
      }
  },
  modules: {}
});
