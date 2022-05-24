import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import compositionApi from './plugins/composition-api'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  compositionApi,
  render: (h) => h(App),
}).$mount('#app')
