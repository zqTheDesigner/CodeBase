<template>
  <q-page class="q-pa-lg">
    <h3 class="q-mx-none">Extended Style</h3>
    <div v-html="description" class="q-mb-lg" />

    <div>
      <div class="row q-col-gutter-md">
        <!-- Borders -->
        <div class="col-3">
          <div class="scoped-style-description">
            <p><b>Borders</b></p>
            <p>
              Use
              <code class="bg-grey-2 q-px-xs">q-border-{size variable} </code>
              for different thickness of borders.
            </p>
          </div>

          <div class="q-gutter-sm">
            <div v-for="size in sizes" :key="size" :class="`q-border-${size} `">
              q-border-{{ size }}
            </div>
          </div>
        </div>

        <!-- Border Radius -->
        <div class="col-3">
          <div class="scoped-style-description">
            <p><b>Border Radius</b></p>
            <p>
              Use
              <code class="bg-grey-2 q-px-xs">q-border-round-{1 to 99} </code>
              for different border radius. Can use together with
              <code class="bg-grey-2 q-px-xs">q-border-{size variable}</code>
            </p>
          </div>
          <div class="q-gutter-sm">
            <div
              v-for="i in 6"
              :key="i"
              :class="`q-border-round-${i * 2} q-border-sm `"
            >
              q-border-round-{{ i * 2 }}
            </div>
          </div>
        </div>

        <!-- Border Colors -->
        <div class="col-3">
          <div class="scoped-style-description">
            <p><b>Border Colors</b></p>
            <p>
              Use
              <code class="bg-grey-2 q-px-xs">q-border-{color variable} </code>
              for different border colors, include Sentient.io colors and all
              quasar colors. Can use together with
              <code class="bg-grey-2 q-px-xs">q-border-{size variable}</code>
            </p>
          </div>
          <div class="q-gutter-sm">
            <div
              v-for="color in colors"
              :key="color"
              :class="`q-border-${color} q-border-lg`"
            >
              q-border-{{ color }}
            </div>
          </div>
        </div>

        <!-- Border Opacity -->
        <div class="col-3">
          <div class="scoped-style-description">
            <p><b>Border Color Opacity</b></p>
            <p>
              Use
              <code class="bg-grey-2 q-px-xs"
                >q-border-{color variable}-alpha-{1 - 10}
              </code>
              for different border color transprancy. Can use together with
              <code class="bg-grey-2 q-px-xs">q-border-{size variable}</code>
            </p>
          </div>
          <div class="q-gutter-sm bg-green-alpha-2 q-pr-sm q-pt-xs q-pb-sm">
            <div
              v-for="i in 5"
              :key="i"
              :class="`q-border-sentient-purple-alpha-${i * 2} q-border-lg`"
            >
              q-border-sentient-purple-alpha-{{ i * 2 }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row q-gutter-sm">
      <div class="col-2 q-gutter-sm">
        <div
          class="
            q-border-xs q-border-red-10-alpha-1
            bg-red-alpha-2
            q-border-round-8
          "
        >
          q-border-xs
        </div>
        <div class="q-border-sm">q-border-sm</div>
        <div class="q-border-md">q-border-md</div>
        <div class="q-border-lg">q-border-lg</div>
        <div class="q-border-xl shadow-xl-indigo-10">q-border-xl</div>
      </div>

      <div>
        <h5 class="text-red-alpha-2">Text Red Alpha 2</h5>
        <h5 class="text-red-alpha-4">Text Red Alpha 4</h5>
        <h5 class="text-red-alpha-6">Text Red Alpha 6</h5>
        <h5 class="text-red-alpha-8">Text Red Alpha 8</h5>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: '',
  props: { description: { type: String } },
  components: {},
  setup() {
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
    const colors = [
      'sentient-beige',
      'sentient-green',
      'sentient-red',
      'sentient-purple',
      'amber',
      'cyan',
    ];
    return { sizes, colors };
  },
});
</script>

<style scoped>
.scoped-style-description {
  height: 180px;
}
</style>
