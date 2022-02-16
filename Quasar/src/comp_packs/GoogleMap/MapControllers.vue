<template>
  <div class="q-my-md">
    <q-btn @click="addMarker">Add Markers</q-btn>
    <q-btn @click="removeMarkers">Remove Markers</q-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { GoogleMapService } from './services/GoogleMapService';

const { placeMarkerClusterer, removeMarker } = GoogleMapService();

export default defineComponent({
  setup() {
    function addMarker() {
      placeMarkerClusterer(
        [
          { id: 'test1', config: { lat: 1.357, lng: 103.822 } },
          { id: 'test2', config: { lat: 1.364, lng: 103.828 } },
        ],
        'tests'
      );
    }

    function removeMarkers() {
      removeMarker('test1');
      // removeMarker('test2');
    }

    return { addMarker, removeMarkers };
  },
});
</script>

<style lang="scss" scoped></style>
