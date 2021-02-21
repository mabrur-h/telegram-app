import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import './mixins/filters'
// import loader from 'vue-ui-preloader';
Vue.config.productionTip = false
Vue.use(VueResource)
// Vue.use(loader)
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
