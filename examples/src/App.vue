<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view></router-view> -->
    <div class="map-container">
      <vue-google-map
        :lat="-34.4"
        :lng="150.644">
      </vue-google-map>
      <!-- <i-map
        :lat="-34.4"
        :lng="150.644">
      </i-map> -->
    </div>
  </div>
</template>

<script>
// import IMap from './components/IMap'
import VueGoogleMap from '../../src'
export default {
  name: 'app',
  components: {
    // IMap
    VueGoogleMap
  }
}
</script>

<style lang="stylus">

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
