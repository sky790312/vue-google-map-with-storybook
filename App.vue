<template>
  <div id="app">
    <div class="map-container">
      <vue-google-map
        :lat="-34.4"
        :lng="150.644">
      </vue-google-map>
    </div>
  </div>
</template>

<script>
import VueGoogleMap from './src'

export default {
  name: 'app',
  components: {
    VueGoogleMap
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
}
.map-container {
  width: 800px;
  height: 600px;
  position: relative;
}
</style>
