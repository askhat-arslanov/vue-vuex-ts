import Vue from 'vue'
import App from './App.vue'
import store from './store'

import storagePlugin from '@/plugins/storage'
import '@/assets/css/main.css'

Vue.config.productionTip = false

Vue.use(storagePlugin)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
