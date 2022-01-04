<template>
  <div>
    <h3 class="q-mx-none">Containers</h3>
    <div v-html="description" class="q-mb-lg" />
    <Column4 />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import Column4 from 'src/containers/Column4.vue';

export default defineComponent({
  props: { description: { type: String } },
  components: { Column4 },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
