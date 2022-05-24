<template>
  <div>
    <v-tabs
      v-model="tab"
    >
      <!-- The v-tab mapped with v-tab-item by using # + a unique identifier -->
      <v-tab href="#tab-1"> Tab A </v-tab>
      <v-tab href="#tab-2"> Tab B </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <!-- The unique identifier for v-tab-items don't need hastag "#" -->
      <v-tab-item value="tab-1"> Tab Item A </v-tab-item>
      <v-tab-item value="tab-2"> Tab Item B </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
  // If this composition-api gives you error, use the comment way instead
  import { ref } from '@vue/composition-api'
  export default {
    setup() {
      const tab = ref('')

      return { tab }
    },
    // Commented data() way, you can use either one you prefer
    // data() {
    //   return {
    // tab: null
    //   }
    // },
  }
</script>

<style lang="scss" scoped></style>
