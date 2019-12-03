import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentIndex:0,
    newlist:[],
    filterType:'',
    serchList:''
  },
  mutations: {
    setState(state,payload){
      state[payload.key]=payload.value
    }
  },
  getters:{
        filterList(state){
          if(state.filterType==="" && state.serchList===""){
            return state.newlist
          }else if(state.filterType===""){
               return state.newlist.filter( item.title.includes(state.serchList))
          }else{
            return state.newlist.filter(item=>item.type===state.filterType && item.title.includes(state.serchList))
          }
        }
  },
  actions: {
       getList({commit}){
        axios.get('/api/getlist').then(res=>{
          if(res.data.code===200){
            commit({type:"setState",key:"newlist",value:res.data.data})
          }
        })
       }
  },
  modules: {
  }
})
