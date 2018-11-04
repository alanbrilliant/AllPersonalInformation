import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import InstantSearch from 'vue-instantsearch';

Vue.use(InstantSearch);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
