<template>
  <div>
    <div class="row">
      <div
        v-for="i in Number(numBlocks)"
        :key="i"
        class="col-md-3 col-sm-6 col-12 q-pa-sm"
        :class="contentClass"
      >
        <slot :name="i">
          <div class="bg-grey q-py-lg">
            {{ i }}
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    numBlocks: { type: Number || String, default: 4 },
    contentClass: {},
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
