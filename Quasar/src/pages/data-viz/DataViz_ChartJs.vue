<template>
  <div>
    <ChartJs />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ChartJs from 'src/comp_packs/ChartJs/ChartJs.vue';

export default defineComponent({
  components: { ChartJs },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
