<template>
  <div>
    <div>
      <q-expansion-item label="Add" icon="add">
        <TagOptions @select-tag="(val) => selectTag(val)" />
      </q-expansion-item>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import TagOptions from './TagOptions.vue';

export default defineComponent({
  components: { TagOptions },
  setup(_, { emit }) {
    const selectTag = (tag) => emit('select-tag', tag);
    return {
      selectTag,
    };
  },
});
</script>

<style lang="scss" scoped></style>
