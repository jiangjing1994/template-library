import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// @ts-ignore
import FishhookUI from '../packages'

Vue.use(FishhookUI, { size: 'mini' })
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
