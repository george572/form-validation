import Vue from 'vue'
import App from './App.vue'
import store from "@/store";
import SmartsourceRegistration from "@/SmartsourceRegistration";
Vue.config.productionTip = false
Vue.use(SmartsourceRegistration)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
