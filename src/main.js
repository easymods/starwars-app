import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

import People from '@/components/People'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path: '/people', component: People}
];

const router = new VueRouter({
  routes,
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
