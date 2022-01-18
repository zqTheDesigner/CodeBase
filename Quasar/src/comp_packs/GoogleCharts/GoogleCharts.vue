<template>
  <div>
    <div class="row q-col-gutter-md">
      <div v-for="type in chartTypes" :key="type" class="col-6">
        <google-chart
          :type="type"
          :options="{ title: 'Distribution of days in 2001Q1' }"
          class="q-border-xs full-width"
          data='[["Month", "Days"], ["Jan", 31],["Feb", 12]]'
        />
        <b>Type: {{ type }}</b>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { gChartsService } from './gChartsService';

const { chartTypes } = gChartsService();

export default defineComponent({
  setup() {
    return { chartTypes };
  },
});
</script>

<style lang="scss" scoped></style>
