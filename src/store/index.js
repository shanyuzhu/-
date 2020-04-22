import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

const state = {
  username: '',
  cartCount: 0
}
export default new Vuex.Store({
  state,
  getters: {},
  actions: {
    saveUserName(context, username) {
      context.commit('saveUserName', username);
    },
    saveCartCount(context, count) {
      context.commit('saveCartCount', count);
    }
  },
  mutations: {
    saveUserName(state, username) {
      state.username = username;
    },
    saveCartCount(state, count) {
      state.cartCount = count;
    }
  },

});