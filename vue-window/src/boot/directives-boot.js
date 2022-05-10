import { boot } from "quasar/wrappers";

import { directives } from "src/directive/directive";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(({ app }) => {
  Object.entries(directives).forEach(([key, fn]) => {
    app.directive(key, fn);
  });
});
