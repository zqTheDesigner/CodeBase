<template>
  <div>
    <NavItem v-for="item in nav" :key="item.title" :item="item" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavItem from './NavItem.vue';
import { navService } from 'src/services/navService';
const { nav } = navService();

export default defineComponent({
  components: {
    NavItem,
  },
  setup() {
    return { nav };
  },
});
</script>

<style scoped></style>
