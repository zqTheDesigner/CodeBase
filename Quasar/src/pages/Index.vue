<template>
  <div class="row items-center justify-center q-pa-lg" style="height: 100vh">
    <div style="max-width: 600px">
      <div class="row no-wrap">
        <div>
          <h2>Hello!</h2>
          <p>
            Here is a Quasar code base, you may find some useful quasar code
            snippets or download some templates here.
          </p>
        </div>

        <q-img src="man-standing-hello.png" width="300px" />
      </div>

      <div class="full-width q-mt-xl">
        All source code can be found from
        <a href="https://github.com/zqTheDesigner/CodeBase.git " target="_blank"
          >This Repository</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
