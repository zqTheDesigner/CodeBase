<template>
  <q-page class="items-center justify-evenly">
    <!-- <h1>Data Viz</h1> -->
    <GoogleCharts />

    <div class="bg-green-4 q-ma-lg absolute fit ">
      <h3 class="absolute-center">Some Title</h3>
    </div>
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
