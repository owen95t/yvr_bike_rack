import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import Vuex from 'vuex'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import App from './App.vue'

//Vue.prototype.$gmaps = window.google.maps
Vue.config.productionTip = false
Vue.use(Vuex)
new Vue({
  render: h => h(App),
}).$mount('#app')


