<template>
  <div>
    <PatternBG />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import PatternBG from 'src/components/PatternBG.vue';

export default defineComponent({
  components: { PatternBG },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
