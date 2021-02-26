import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import './plugins/socketPlugin';
import Directives from './plugins/directives';

Vue.config.productionTip = false
Vue.use(Directives);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
