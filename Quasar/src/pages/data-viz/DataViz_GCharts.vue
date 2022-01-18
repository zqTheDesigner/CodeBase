<template>
  <q-page class="q-py-lg">
    <!-- <h1>Data Viz</h1> -->
    <GoogleCharts />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import GoogleCharts from 'src/comp_packs/GoogleCharts/GoogleCharts.vue';

export default defineComponent({
  name: '',
  components: { GoogleCharts },
  setup() {
    return {};
  },
});
</script>
