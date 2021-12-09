<template>
  <div>
    {{ title }}

    <div class="full-width">
      <GChart type="ColumnChart" :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import { GChart } from 'vue3-googl-chart';

export default defineComponent({
  components: { GChart: HTMLElement },
  setup() {
    return {};
  },
});
</script>

<script setup>
const title = 'test';

const chartData = [
  ['Year', 'Sales', 'Expenses', 'Profit'],
  ['2014', 1000, 400, 200],
  ['2015', 1170, 460, 250],
  ['2016', 660, 1120, 300],
  ['2017', 1030, 540, 350],
];

const chartOptions = {
  chart: {
    title: 'Company Performance',
    subtitle: 'Sales, Expenses, and Profit: 2014-2017',
  },
};
</script>

<style lang="scss" scoped></style>
