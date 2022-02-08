<template>
  <div>
    <NavItem v-for="item in navItems" :key="item.title" :item="item" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavItem from './NavItem.vue';
import { navItems } from 'src/router/navItems';
// import { navService } from 'src/services/navService';
// const { nav } = navService();

export default defineComponent({
  components: {
    NavItem,
  },
  setup() {
    return { navItems };
  },
});
</script>

<style scoped></style>
