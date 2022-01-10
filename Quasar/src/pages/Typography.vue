<template>
  <q-page class="q-pa-lg">
    <h3 class="q-mx-none">Typography</h3>
    <div class="q-mb-lg">
      <i>Last update: 2022 Jan 06</i>
    </div>

    <div v-html="description" class="q-mb-lg" />
  </q-page>
</template>

<script>
export default {
  props: { description: { type: String } },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
