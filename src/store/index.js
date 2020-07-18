import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    infoList: [],
    listaComentarios: [],
    characters: [],
  },
  getters: {
    
    enviarInfoApi(state){
      return state.infoList;
    },
    enviarListaComentarios(state){
      return state.listaComentarios;
    },
    
  },
  mutations: {
    mutandoInfoApi(state,infoApiRecibida){
      state.infoList = infoApiRecibida;
    },
    guardaComentario(state,infoComentRecibido){
      state.listaComentarios.push(infoComentRecibido); 
    },
    FILLCHAR(state, apiRes)
    {
      state.characters = apiRes;
    },
  },
  actions: {
    
    infoApi(context,infoApiRecibida){
      context.commit('mutandoInfoApi',infoApiRecibida);
    },
    guardandoComentario(context,infoComentRecibido){
      context.commit('guardaComentario',infoComentRecibido);
    },
    
  }
})
