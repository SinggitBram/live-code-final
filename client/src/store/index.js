import Vue from 'vue'
import Vuex from 'vuex'
import axios from'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countryList : []
  },
  mutations: {
    fillCountryList(state,payload){
      state.countryList = payload
    }
  },
  actions: {
    getAllCountry(context){
      axios({
        method:"get",
        url:"http://localhost:3000/countries",
        headers: {token: localStorage.getItem("token")}
      })
      .then(response =>{
        context.commit("fillCountryList", response.data)
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  modules: {
  }
})
