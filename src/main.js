import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/common.styl'
import './assets/icons/iconfont.css'
import $http from './api/axios.js'
import { Toast, Xui } from './components/plugins'
Vue.config.productionTip = false
Vue.prototype.$http = $http
Vue.use(Xui)
Vue.use(Toast)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
