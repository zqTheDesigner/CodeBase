<template>
  <div>
    <transition-group appear-active-class="animated zoomIn" appear>
      <!-- Problem: cannot figure out how to let the list item appear one by one without writing customed css or js time interval -->
      <div :key="k" v-for="k in ['a', 'b', 'c']">
        <b>Group {{k}}</b>
        <TagSelector :tags="tagGroups[k]" />
        <hr />
      </div>
      <!-- 
      <div key="2">
        <b>Group B</b>
        <TagSelector :tags="tagGroups.b" />

        <hr />
      </div>

      <div key="3">
        <b>Group C</b>
        <TagSelector :tags="tagGroups.c" />
      </div> -->
    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TagSelector from 'src/comp_packs/TagSelector/components/TagSelector.vue';
export default defineComponent({
  components: { TagSelector },
  setup() {
    return {
      // This serves like a temp data base to hold 3 sets of data for each group
      tagGroups: {
        a: ['Orange', 'Kiwi', 'Banana'],
        b: ['Cat', 'Dog', 'Turtle'],
        c: ['Jan', 'Feb', 'March'],
      },
    };
  },
});
</script>

<style lang="scss" scoped></style>
