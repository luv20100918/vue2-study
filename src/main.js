import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-javascript'

Vue.config.productionTip = false
Vue.prototype.$prism = Prism

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
