import Directive from "../directive/directive.js";

module.exports = function (api) {
  api.compatiableWith("quasar", "^2.0.0");

  if (api.hasVite === true) {
    api.compatiableWith("@quasar/app-viet", " ^1.0.0-beta.0");
  } else {
    api.compatiableWith("@quasar/app-webpack", "^3.0.0");
  }

  api.extendQuasarConf(extendConf);
};

function extendConf(conf, api) {
  // make sure my-directive boot file is registered
  conf.boot.push(
    "~quasar-app-extension-my-directive/src/boot/register-my-directive.js"
  );

  // @quasar/app-vite does not need this
  if (api.hasVite !== true) {
    // make sure boot & other files get transpiled
    conf.build.transpileDependencies.push(
      /quasar-app-extension-my-directive[\\/]src/
    );
  }
}

export default ({ app }) => {
  app.directive("my-directive", MyDirective);
};
