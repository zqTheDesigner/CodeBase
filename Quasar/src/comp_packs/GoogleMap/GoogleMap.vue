<template>
  <div style="position: relative; width: 100%; height: 80vh">
    <!-- 
      For styling gmap component, width/height 100% doesn't work it is 
      important to set the parent div as **position:relative** ,  this 
      will prevent  google map  from overflow outside of the container
      area.

      For the google map component itself ,  set  class='absolute fit'

      To make the google map full screen,have to make the grand parent 
      container to full screen. The parent and child will follow it.
      -->
    <div id="gmap" class="absolute fit"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

import { GoogleMapService } from './services/GoogleMapService';
const { initMap } = GoogleMapService();

export default defineComponent({
  setup() {
    onMounted(async () => {
      const mapContainer = document.getElementById('gmap') as HTMLElement;
      await initMap(mapContainer);
    });

    return {};
  },
});
</script>

<style scoped></style>
