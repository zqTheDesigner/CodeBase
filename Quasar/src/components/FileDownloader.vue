<template>
  <!-- Currently only support download file from public url -->
  <div>
    <q-btn
      label="Download File"
      color="primary"
      icon="download"
      no-caps
      @click="downloadFile()"
    />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { exportFile } from 'quasar';
import axios from 'axios';

export default defineComponent({
  props: { url: { type: String, required: true }, fileName: { type: String } },
  setup(props) {
    const fileName = ref('');

    if (!props.fileName) {
      fileName.value = props.url.split('/')[props.url.split('/').length - 1];
    }

    async function downloadFile() {
      const file = await axios.get(props.url);
      console.log(file);
      exportFile(fileName.value, file.data);
    }

    return { downloadFile };
  },
});
</script>

<style lang="scss" scoped></style>
