<template>
  <div>
    <div v-html="description" class="q-mb-lg" />
    <MapController />
    <GoogleMap />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import GoogleMap from 'src/comp_packs/GoogleMap/GoogleMap.vue';
import MapController from 'src/comp_packs/GoogleMap/MapControllers.vue';

export default defineComponent({
  components: { GoogleMap, MapController },
  props: { description: { type: String } },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
