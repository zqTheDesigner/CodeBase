<template>
  <div :class="`bg-grey-${nestLevel + 2}`">
    <q-expansion-item
      :label="'&nbsp;'.repeat(nestLevel * 2) + item.title"
      :expand-icon-class="item.children ? '' : 'hidden'"
    >
      <template #header>
        <div class="full-width column justify-center">
          <!-- Render normal text if there is no path -->
          <p class="q-pa-ma-none" v-if="!item.path">
            {{ '&nbsp;'.repeat(nestLevel * 2) + item.title }}
          </p>
          <!-- Render link if there is path -->
          <router-link
            class="q-no-decoration text-grey-10 no-underline full-width"
            v-else
            :to="item.path"
          >
            {{ '&nbsp;'.repeat(nestLevel * 2) + item.title }}
          </router-link>
        </div>
      </template>
      <div v-if="item.children">
        <!-- 
					Recustive Components will be invoked 
					if there is child item nested inside 
					-->
        <nav-item
          v-for="(childItem, index) in item.children"
          :key="index"
          :item="childItem"
          :nest-level="nestLevel + 1"
          :parent-path="
            parentPath + '/' + (item.pathName ? item.pathName : item.title)
          "
        />
      </div>
    </q-expansion-item>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

export default defineComponent({
  name: 'NavItem',
  props: {
    item: { type: Object, required: true },

    /**
     * parentPath will track the path for  parent
     * layers, used in "to" attribute.
     */
    parentPath: { default: '' },

    /**
     * nestLevel will increase by 1 when there is
     * children level navigation item.
     */
    nestLevel: { default: 0 },
  },
  setup() {
    return { router };
  },
});
</script>

<style scoped></style>
