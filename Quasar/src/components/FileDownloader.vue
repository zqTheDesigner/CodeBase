<template>
  <div>
    <q-btn label="Download File" no-caps @click="downloadFile()" />
  </div>
</template>

<script>
import { exportFile } from 'quasar';

function downloadFile() {
  exportFile('test.txt', 'test');
}

export default {
  setup() {
    return { downloadFile };
  },
};
</script>

<style lang="scss" scoped></style>
