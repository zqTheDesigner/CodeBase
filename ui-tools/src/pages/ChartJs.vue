<template>
  <div>
    <div class="row items-center" style="height: 600px">
      <div class="col-6 column justify-between full-height">
        <q-select
          hint="Always wait till the chart animation finishend before change the chart type, else it will freeze. When freezed, refresh the browser"
          v-model="chartType"
          @update:model-value="
            () => {
              updateDefaultData();
              drawChart();
            }
          "
          :options="Object.keys(chartsDefault)"
        />
        <canvas ref="chartJsContainer" style="max-height: 45vh" />
      </div>

      <div class="col-6">
        <p>
          Edited data will NOT be saved, please paste the data somewhere else
          before change chart type.
        </p>
        <pre
          style="border: 1px solid black; height: 300px; overflow: scroll"
        ><code style="outline:none" contenteditable="true" @input="evt => updateData(evt)">{{config.data}}</code></pre>

        <pre
          style="border: 1px solid black; height: 300px; overflow: scroll"
        ><code style="outline:none" contenteditable="true" @input="evt => updateOptions(evt)">{{config.options}}</code></pre>
        <small class="text-red">{{ jsonSyntaxErr }}</small>
        <q-btn label="Update Chart" @click="drawChart()" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';
import { chartsDefault } from 'src/constants/chartJsDefaultData';
import Chart from 'chart.js/auto';

const chart = ref();
const chartJsContainer = ref(null);

const chartType = ref('line');

const jsonSyntaxErr = ref('');

const config = reactive({ type: '', data: {}, options: {} });

const drawChart = () => {
  // Old chart must be destoried before re-draw
  if (chart.value) {
    chart.value.destroy();
  }

  const chartConfig = {
    type: config.type,
    data: config.data,
    options: config.options,
  };

  chart.value = new Chart(chartJsContainer.value, chartConfig);
};

const updateDefaultData = () => {
  const defaultConfig = chartsDefault[chartType.value];
  config.type = defaultConfig.type;
  config.data = defaultConfig.data;
  config.options = defaultConfig.options;
};

const updateData = (evt) => {
  try {
    config.data = JSON.parse(evt.target.innerText);
    jsonSyntaxErr.value = '';
  } catch (err) {
    jsonSyntaxErr.value = err;
  }
};

const updateOptions = (evt) => {
  try {
    config.options = JSON.parse(evt.target.innerText);
    jsonSyntaxErr.value = '';
  } catch (err) {
    jsonSyntaxErr.value = err;
  }
};

onMounted(() => {
  updateDefaultData();
  drawChart();
});
</script>

<style lang="scss" scoped></style>
