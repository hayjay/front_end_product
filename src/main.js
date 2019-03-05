import Vue from "vue";
import App from "./App.vue";
import router from './router';
import Vuex from 'vuex';
import {http} from './http-common';
// import './toasts';
import { Toasts } from './toasts.js';

Vue.use(Vuex)
http.defaults.headers.common["Authorization"] = localStorage.getItem('auth');

Vue.prototype.$http = http;
Vue.prototype.$toast = Toasts;


Vue.config.productionTip = false;

new Vue({
  router, // inject the router to make whole app router-aware
  render: h => h(App)
}).$mount("#app");