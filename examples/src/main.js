// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import VueGoogleMap from 'vue-google-map'
// import VueFlagList from 'vue-flag-list'
// import 'vue-flag-list/dist/vue-flag-list.min.css'

Vue.config.productionTip = false

// Vue.use(VueGoogleMap)
// Vue.use(VueFlagList)

/* eslint-disable */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
