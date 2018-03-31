<template>
  <div class="i-map">
    <div
      v-if="searchable"
      class="search-container">
      <input
        id="pac-input"
        class="controls"
        type="text"
        placeholder="search and click..">
      <i class="fa fa-search"></i>
    </div>
    <div
      v-if="shouldShowAddress && markers.length"
      :class="['result', { 'has-search-box': searchable }]">
      <button
        type="button"
        class="close"
        @click="clearMarkers">
        <span>&times;</span>
      </button>
      <p class="address">{{ address }}</p>
      <p class="latlng">{{ latLng.lat }}, {{ latLng.lng }}</p>
    </div>
    <div id="google-map"></div>
  </div>
</template>

<script>
export default {
  name: 'IMap',
  props: {
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
  },

  data () {
    return {
      latLng: {
        lat: this.lat,
        lng: this.lng
      },
      address: '',
      markers: []
    }
  },

  computed: {
    // latLng () {
    //   const latLng = {
    //     lat: this.lat,
    //     lng: this.lng
    //   }
    //   return latLng
    // }
  },

  methods: {
    initMarker (map) {
      /* eslint-disable */
      // only one now
      const marker = new google.maps.Marker({
        position: this.latLng,
        draggable: this.draggable,
        animation: google.maps.Animation.DROP,
        map: map
      })
      this.markers.push(marker)

      if (this.draggable) {
        google.maps.event.addListener(marker, 'dragend', event => {
          const position = marker.getPosition()
          const latLng = {lat: position.lat(), lng: position.lng()}
          this.setPosition(latLng)
        })
      }
      /* eslint-enable */
    },

    initSeearBox (map) {
      /* eslint-disable */
      const pacInput = document.getElementById('pac-input')
      const searchBox = new google.maps.places.SearchBox(pacInput)
      google.maps.event.addDomListener(pacInput, 'keydown', event => {
        if (event.keyCode === 13) {
            event.preventDefault()
        }
      })
      map.addListener('bounds_changed', () => {
        searchBox.setBounds(map.getBounds())
      })
      searchBox.addListener('places_changed', () => {
        const places = searchBox.getPlaces()
        if (!places.length) {
          return
        }

        this.clearMarkers()
        const bounds = new google.maps.LatLngBounds()
        places.forEach(place => {
          if (!place.geometry) {
            window.alert("Returned place contains no geometry")
            return
          }

          this.markers.push(new google.maps.Marker({
            map: map,
            // icon: icon,
            title: place.name,
            position: place.geometry.location
          }))
          this.setPosition(place.geometry.location)
          if (place.geometry.viewport) {
            // Only geocodes have viewport.
            bounds.union(place.geometry.viewport)
          } else {
            bounds.extend(place.geometry.location)
          }
        })
        map.fitBounds(bounds)
      })
      /* eslint-enable */
    },

    clearMarkers () {
      this.markers.forEach(marker => {
        marker.setMap(null)
      })
      this.markers = []
    },

    setPosition (latLng) {
      /* eslint-disable */
      const self = this
      const geocoder = new google.maps.Geocoder()
      geocoder.geocode({
        location: latLng
      }, (results, status) => {
        if (status === 'OK') {
          const newMarkerInfo = results[0]
          const lat = newMarkerInfo.geometry.location.lat()
          const lng = newMarkerInfo.geometry.location.lng()

          self.address = newMarkerInfo.formatted_address
          if (self.showDecimalPoint) {
            self.latLng = {
              lat: lat.toFixed(self.showDecimalPoint),
              lng: lng.toFixed(self.showDecimalPoint)
            }
          } else {
            self.latLng = {
              lat,
              lng
            }
          }
        } else {
          console.log('no address')
        }
      })
      /* eslint-enable */
    }
  },

  mounted () {
    /* eslint-disable */
    const googleMap = document.getElementById('google-map')
    const map = new google.maps.Map(googleMap, {
      zoom: 8,
      center: this.latLng,
      mapTypeControl: this.hasMapTypeControl,
      scaleControl: this.hasScaleControl,
      streetViewControl: this.hasStreetViewControl,
      rotateControl: this.hasRotateControl,
      fullscreenControl: this.hasFullscreenControl,
      zoomControl: this.hasZoomControl
    })
    this.initMarker(map)
    if (this.searchable) {
      this.initSeearBox(map)
    }
    this.setPosition(this.latLng)
    /* eslint-enable */
  }
}
</script>

<style scoped>

.i-map, #google-map {
  position: relative;
  width: 100%;
  height: 100%;
  font-family: PingFangTC;
}

.search-container {
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 50%;
  width: 300px;
  height: 40px;
  background-color: #fff;
  margin-left: -150px;
  border-radius: 5px;
}

.controls {
  border: 1px solid transparent;
  width: calc(100% - 25px);
  height: 32px;
  outline: none;
  padding: 3px 10px;
  font-size: 14px;
  font-weight: 500;
  text-overflow: ellipsis;
}

.controls:focus {
  border-color: white;
}

.fa {
  color: #bcbdc1;
}

.pac-container {
  display: none;
}

.result {
  position: absolute;
  left: 50%;
  top: 10px;
  width: 300px;
  margin-left: -150px;
  z-index: 1;
  box-sizing: border-box;
  padding: 20px 10px 10px 10px;
  border-radius: 5px;
  background-color: #fff;
}

.result.has-search-box {
  margin-top: 45px;
}

.close {
  position: absolute;
  top: 0;
  right: 2px;
  cursor: pointer;
  font-size: 1.2rem;
  border: none;
  background-color: #fff;
}

.address {
  margin: 0;
  font-weight: 500;
  font-size: 12px;
  color: #000;
}

.latlng {
  margin: 0;
  font-size: 10px;
  color: #bcbdc1;
}

#target {
  width: 345px;
}

</style>
