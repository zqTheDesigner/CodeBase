<template>
  <q-page>
    <doc-header :detail="detail" />
    <textarea class="full-width" type="text"  v-model="csv" />
    <pre>
			{{ parseResult }}
		</pre
    >
  </q-page>
</template>

<script>
import { ref, computed } from 'vue';
import { csvParser } from 'src/services/csvParser';

const { toJson } = csvParser();

export default {
  props: { detail: {} },
  setup() {
    const csv = ref('');
    return {
      parseResult: computed(() => {
        return toJson(csv.value);
      }),
      csv,
    };
  },
};
</script>

<style lang="scss" scoped></style>
