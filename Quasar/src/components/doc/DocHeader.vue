<template>
  <div>
    <h3 class="q-mx-none">{{ detail.title }}</h3>
    <div class="q-mb-lg">
      <i>Last update: {{ lastUpdate }}</i>
    </div>

    <p class="q-mb-lg">
      {{ detail.description }}
    </p>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    detail: {},
    lastUpdate: {},
  },
});
</script>

<style lang="scss" scoped></style>
