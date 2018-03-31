import VueGoogleMap from './VueGoogleMap.vue'

// const VueGoogleMap = {
//   install: function (Vue) {
//     // use directly
//     if (typeof window !== 'undefined' && window.Vue) {
//       window.Vue.use(googleMap)
//     }
//
//     Vue.component('VueGoogleMap', googleMap)
//   }
// }

VueGoogleMap.install = function (Vue) {
  Vue.component('VueGoogleMap', VueGoogleMap)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueGoogleMap)
}

// es6
export default VueGoogleMap
