<template>
  <div>
    <TagDisplay @remove-tag="(val) => removeTag(val)" />
    <TagAdding @select-tag="(val) => selectTag(val)" />
  </div>
</template>

<script>
import { defineComponent, provide, ref } from 'vue';
import TagAdding from './TagAdding.vue';
import TagDisplay from './TagDisplay.vue';

export default defineComponent({
  components: { TagAdding, TagDisplay },
  props: {
    tags: {
      type: Array,
      defult: [],
    },
  },

  setup(props) {
    // This will form an array ref from the received prop tags
    /**
     * !!! Question If the backend is connected, should this be
     * !!! send to backend? And the parent component to receive
     * !!! the updated value? 
     * */
    const tagsRef = ref(props.tags);

    // This will pass the tags to all child and grandchild component
    // Will be received by inject() function,refer to TagDisplay.vue
    provide('tags', tagsRef);

    console.log(typeof tagsRef.value);

    function removeTag(tagToRmv) {
      // Check if the tag exist
      const idxToRmv = tagsRef.value.findIndex((tag) => tag === tagToRmv);
      if (idxToRmv > -1) {
        // If exist, remove it by index
        tagsRef.value.splice(idxToRmv, 1);
      }
    }

    function selectTag(tagToAdd) {
      // Check if the tag exist
      const idxToAdd = tagsRef.value.findIndex((tag) => tag === tagToAdd);
      if (idxToAdd === -1) {
        // if NOT eixst, add append the tag to add
        tagsRef.value.push(tagToAdd);
      }
    }

    return { removeTag, selectTag };
  },
});
</script>

<style lang="scss" scoped></style>
