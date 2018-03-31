# vue-google-map

## First
You must have to use google account and gcp (google cloud platform) project.
The IMap component use the relative google map api as following:
“Google Maps JavaScript API” , “Google Maps Geocoding API” , “Google Places API Web Service”
Active these api in your gcp project first. 

### Installation
``` bash
npm install vue-google-map-with-storybook
```

### ES6
``` bash
import VueGoogleMap from 'vue-google-map-with-storybook'

new Vue({
  components: {
    VueGoogleMap
  }
})
```

### CommonJS
``` bash
var VueGoogleMap = require('vue-google-map-with-storybook')

new Vue({
  components: {
    VueGoogleMap
  }
})
```

### Usage
``` bash
<vue-google-map
  :lat="-34.4"
  :lng="150.644"
  :draggable="true"
  :searchable="true"
  :shouldShowAddress="true"
  :hasMapTypeControl="true"
  :hasScaleControl="true"
  :hasStreetViewControl="true"
  :hasRotateControl="true"
  :hasFullscreenControl="true"
  :hasZoomControl="true"
  :showDecimalPoint="1">
</vue-google-map>
```

``` bash
lat: {
  type: Number,
  default: 0
},
lng: {
  type: Number,
  default: 0
},
draggable: {
  type: Boolean,
  default: false
},
searchable: {
  type: Boolean,
  default: false
},
shouldShowAddress: {
  type: Boolean,
  default: true
},
hasMapTypeControl: {
  type: Boolean,
  default: true
},
hasScaleControl: {
  type: Boolean,
  default: true
},
hasStreetViewControl: {
  type: Boolean,
  default: true
},
hasRotateControl: {
  type: Boolean,
  default: true
},
hasFullscreenControl: {
  type: Boolean,
  default: true
},
hasZoomControl: {
  type: Boolean,
  default: true
},
showDecimalPoint: {
  type: Number,
  default: 0
}
```

You can check the examples folder which made by "vue-cli" and including storybook sample.

### examples
``` bash

cd examples

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# check in storybook
npm run storybook
```

# Thanks
