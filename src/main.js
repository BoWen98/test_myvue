// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import './plugins/element.js'
import router from './router/router.js'
import axios from 'axios'

Vue.use(ElementUI);
Vue.use(router);
Vue.prototype.$http = axios

new Vue({
  router,
  el: '#app',
  render: h => h(App)
}).$mount('#app')
