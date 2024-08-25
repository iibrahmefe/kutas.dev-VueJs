import Vue from 'vue'
import App from './App.vue'
import "../src/styled/reset.css"

import 'swiper/css';
Vue.config.productionTip = false



new Vue({
  render: h => h(App),
}).$mount('#app')