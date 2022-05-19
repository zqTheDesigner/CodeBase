<template>
  <div>
    <div class="column q-gutter-md">
      <span :class="theClass" class="q-pa-lg" 
      style="font-size:42px" :style="textDecoration">{{ test }}</span>
      <span>{{ theClass }}</span>
    </div>
    <div>Test</div>

    <q-btn @click="updateStyle()">Update Style</q-btn>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'testTest',
  setup() {
    const test = ref('a test variable');

    const theClass = ref('bg-pink-9 text-white');
    const textDecoration = ref('text-decoration:none')

    const updateStyle = () => {
      theClass.value = 'bg-blue-9 text-green-2';
      textDecoration.value = 'text-decoration:underline'
    };
    return {
      test,
      updateStyle,
      theClass,
      textDecoration
    };
  },
});
</script>

<style lang="scss" scoped>

</style>
