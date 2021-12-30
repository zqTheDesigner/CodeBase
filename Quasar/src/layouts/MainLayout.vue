<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <!-- 
					Question: What's the difference between 
					add the function directly in the @click 
					and create a function inside setup  and 
					call it with @click? 
					-->

        <q-toolbar-title class="full-width text-center">
          <q-icon name="home" />
          <router-link to="/" class="text-white"> Quasar Code Base</router-link>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <ListNavigation />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ListNavigation from 'src/components/nav/ListNavigation.vue';

export default defineComponent({
  name: 'MainLayout',

  components: { ListNavigation },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
    };
  },
});
</script>
