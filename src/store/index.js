import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";
import actions from "./actions.js";
import mutations from "./mutations";
import getters from "./getters";
import modules from './modules';
import state from './state';

Vue.use(Vuex);

const store = new Vuex.Store({
    actions,
    getters,
    modules,
    mutations,
    state
})


export default store;