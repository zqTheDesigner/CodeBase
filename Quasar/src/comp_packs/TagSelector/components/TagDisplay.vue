<template>
  <div>
    Tag Display

    <q-chip
      v-for="(tag, idx) in tags"
      :key="idx"
      removable
      @remove="removeTag(tag)"
    >
      {{ tag }}
    </q-chip>
  </div>
</template>

<script>
import { defineComponent, inject } from 'vue';

export default defineComponent({
  setup(_, { emit }) {
    const tags = inject('tags');
    const removeTag = (tag) => emit('remove-tag', tag);

    return { tags, removeTag };
  },
});
</script>

<style lang="scss" scoped></style>
