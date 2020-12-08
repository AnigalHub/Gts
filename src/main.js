import Vue from 'vue'
import App from './App.vue'

import { LayoutPlugin, CarouselPlugin, NavbarPlugin, BootstrapVueIcons } from 'bootstrap-vue';


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(LayoutPlugin);
Vue.use(CarouselPlugin);
Vue.use(NavbarPlugin);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
