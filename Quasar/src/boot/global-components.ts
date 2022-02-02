/* eslint-disable @typescript-eslint/require-await */
import { boot } from 'quasar/wrappers';
import DocHeader from 'src/components/doc/DocHeader.vue';

export default boot(async ({ app }) => {
  app.component('doc-header', DocHeader);
});
