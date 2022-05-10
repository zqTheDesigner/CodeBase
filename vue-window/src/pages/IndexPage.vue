<template>
  <q-page style="min-width: 100%; min-height: 100%; position: fixed">
    <div style="position: fixed" v-drag>
      <img
        alt="Quasar logo"
        src="~assets/quasar-logo-vertical.svg"
        style="width: 200px; height: 200px; user-drag: none"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>
