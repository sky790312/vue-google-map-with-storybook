/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
/* eslint-disable */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import IMap from '../components/IMap.vue';

const lat = 23.90
const lng = 121.07

storiesOf('IMap', module)
  .add('default', () => ({
    components: { IMap },
    template: `
      <div class="container">
        <i-map
          :lat="${lat}"
          :lng="${lng}">
        </i-map>
      </div>`
  }))
  .add('with draggable marker', () => ({
    components: { IMap },
    template: `
      <div class="container">
        <i-map
          :lat="${lat}"
          :lng="${lng}"
          :draggable="true">
        </i-map>
      </div>`
  }))
  .add('with searchable input', () => ({
    components: { IMap },
    template: `
      <div class="container">
        <i-map
          :lat="${lat}"
          :lng="${lng}"
          :searchable="true">
        </i-map>
      </div>`
  }))
  .add('control latlng to specific decimal point (5)', () => ({
    components: { IMap },
    template: `
      <div class="container">
        <i-map
          :lat="${lat}"
          :lng="${lng}"
          :searchable="true"
          :showDecimalPoint="5">
        </i-map>
      </div>`
  }))
  .add('ui control setting', () => ({
    components: { IMap },
    data () {
      return {
        controls: {
          hasMapTypeControl: true,
          hasScaleControl: true,
          hasStreetViewControl: true,
          hasRotateControl: true,
          hasFullscreenControl: true,
          hasZoomControl: true
        },
        shouldShow: true
      }
    },
    template: `
      <div class="container">
        <div>
          <label>
            show map control
            <input type="checkbox" v-model="controls.hasMapTypeControl" @change="refresh">
          </label>
          <label>
            show street view control
            <input type="checkbox" v-model="controls.hasStreetViewControl" @change="refresh">
          </label>
          <label>
            show full screen control
            <input type="checkbox" v-model="controls.hasFullscreenControl" @change="refresh">
          </label>
          <label>
            show zoom control
            <input type="checkbox" v-model="controls.hasZoomControl" @change="refresh">
          </label>
        </div>
        <div>
          <label>
            use rotate control
            <input type="checkbox" v-model="controls.hasRotateControl" @change="refresh">
          </label>
          <label>
            use sacle control
            <input type="checkbox" v-model="controls.hasScaleControl" @change="refresh">
          </label>
        </div>
        <i-map
          v-if="shouldShow"
          :lat="${lat}"
          :lng="${lng}"
          :searchable="true"
          :hasMapTypeControl="controls.hasMapTypeControl"
          :hasScaleControl="controls.hasScaleControl"
          :hasStreetViewControl="controls.hasStreetViewControl"
          :hasRotateControl="controls.hasRotateControl"
          :hasFullscreenControl="controls.hasFullscreenControl"
          :hasZoomControl="controls.hasZoomControl">
        </i-map>
      </div>`,
    methods: {
      refresh() {
        this.shouldShow = false
        setTimeout(() => {
          this.shouldShow = true
        }, 100)
      }
    }
  }))
