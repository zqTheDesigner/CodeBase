<template>
  <div>
    <div id="gmap" class="absolute fit"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

import { GoogleMapService } from './GoogleMapService';
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
