<template>
  <div>
    <div class="row q-col-gutter-md">
      <div v-for="chartType in chartTypes" :key="chartType" class="col-6">
        <div class="full-widthc q-pa-lg">
          <canvas :id="chartType + '-chartJs'"></canvas>
        </div>

        <b>Type: {{ chartType }}</b>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import Chart, { ChartItem, ChartTypeRegistry } from 'chart.js/auto';
import { chartsJsService } from './ChartJsService';

const { chartTypes } = chartsJsService();

export default defineComponent({
  setup() {
    onMounted(() => {
      chartTypes.forEach((chartType) => {
        // 2022 Jan 5 - ZQ: I still don't really understan what does this "as" do, but it solved some typescript error.
        const ctx = document.getElementById(
          chartType + '-chartJs'
        ) as ChartItem;
        new Chart(ctx, {
          type: chartType as keyof ChartTypeRegistry,
          data: {
            datasets: [
              {
                data: [65, 59, 90, 81, 56, 55, 40],
              },
              {
                data: [28, 48, 40, 19, 96, 27, 100],
              },
            ],
          },
        });
      });
    });

    return { chartTypes };
  },
});
</script>

<style scoped></style>
