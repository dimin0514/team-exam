import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import vuex from 'vuex'
import {store} from '@/store'
import router from '@/router'
import VueCharts from 'vue-chartjs'

Vue.config.productionTip = false
Vue.prototype.$http = axios
new Vue({
  vuetify,
  router,
  axios,
  vuex,
  store,
  VueCharts,
  render: h => h(App)
}).$mount('#app')
