<template>
  <div :class="`bg-grey-${nestLevel + 2}`">
    <q-expansion-item
      :to="parentPath + '/' + (item.pathName ? item.pathName : item.title)"
      :label="'&nbsp;&nbsp;'.repeat(nestLevel) + item.title"
      :expand-icon-class="item.children ? '' : 'hidden'"
    >
      <div v-if="item.children">
        <!-- 
					Recustive Components will be invoked 
					if there is child item nested inside 
					-->
        <nav-item
          v-for="childItem in item.children"
          :key="childItem.title"
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
    item: {},

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
