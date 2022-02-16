<template>
  <div class="q-pa-md q-border-xs">
    <b>Create New Tag:</b>
    <div class="row items-center q-mb-sm">
      <q-input v-model="newTag" />
      <q-btn
        color="secondary"
        rounded
        icon="add"
        size="xs"
        @click="createNewTag"
      />
    </div>

    <hr />

    <b>Select Tag:</b>
    <q-btn
      v-for="option in options"
      :key="option"
      color="primary"
      @click="selectTag(option)"
      >{{ option }}</q-btn
    >
  </div>
</template>

<script>
import tagSelectorService from '../services/tagSelectorService';
// Import the global options list
const { options, addOption } = tagSelectorService();

import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup(_, { emit }) {
    const newTag = ref('');

    function createNewTag() {
      selectTag(newTag.value);

      // This function will add the new tag to the global option service
      // So from other instance can access the same set of options
      addOption(newTag.value);
      // Reset input box value
      newTag.value = '';
    }

    function selectTag(tag) {
      emit('select-tag', tag);
    }

    return { options, newTag, selectTag, createNewTag };
  },
});
</script>

<style lang="scss" scoped></style>
