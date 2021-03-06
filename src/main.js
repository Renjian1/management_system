import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import axios from 'axios'
import Qs from 'qs'
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.axios = axios
Vue.prototype.qs = Qs
Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
