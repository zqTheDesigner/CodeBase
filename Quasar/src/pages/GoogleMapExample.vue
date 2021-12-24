<template>
  <div>
    <div v-html="description" class="q-mb-lg" />
    <GoogleMap />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import GoogleMap from 'src/comp_packs/GoogleMap/GoogleMap.vue';

export default defineComponent({
  components: { GoogleMap },
  props: { description: { type: String } },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
