<template>
  <q-page class="q-pa-lg">
    <h3 class="q-mx-none">Extended Style</h3>
    <div v-html="description" class="q-mb-lg" />

    <div class="row items-center q-mb-md">
      <p class="q-pa-ma-none">Download q-extended-style.scss</p>

      <FileDownloader
        class="q-mx-sm"
        url="https://raw.githubusercontent.com/zqTheDesigner/CodeBase/main/Quasar/src/css/q-extended-style.scss"
      />
    </div>

    <Column4
      num-blocks="8"
      content-class="q-mb-xl q-pb-xl q-horizontal-divider"
    >
      <!-- This syntax #1 is equals to v-slot="1" attribute -->
      <template #1>
        <!-- Borders -->
        <div class="scoped-style-description">
          <p><b>Borders</b></p>
          <p>
            Use
            <code class="bg-grey-2 q-px-xs">q-border-{size variable} </code>
            for different thickness of borders. Border thickness ratio is
            following fibonacci sequence.
          </p>
        </div>

        <div class="q-gutter-xs content-end">
          <div
            v-for="size in sizes"
            :key="size"
            :class="`q-border-${size} `"
            class="q-pa-xs"
          >
            q-border-{{ size }}
          </div>
        </div>
      </template>

      <template #2>
        <!-- Border Radius -->
        <div class="scoped-style-description">
          <p><b>Border Radius</b></p>
          <p>
            Use
            <code class="bg-grey-2 q-px-xs">q-border-round-{1 to 99} </code>
            for different border radius. Can use together with
            <code class="bg-grey-2 q-px-xs">q-border-{size variable}</code>
          </p>
        </div>

        <div class="q-gutter-xs">
          <div
            v-for="i in 6"
            :key="i"
            :class="`q-border-round-${i * 3} q-border-sm `"
            class="q-pa-xs"
          >
            q-border-round-{{ i * 2 }}
          </div>
        </div>
      </template>

      <template #3>
        <!-- Border Colors -->
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
        <div class="q-gutter-xs">
          <div
            v-for="color in colors"
            :key="color"
            :class="`q-border-${color} q-border-lg`"
            class="q-pa-xs"
          >
            q-border-{{ color }}
          </div>
        </div>
      </template>

      <template #4>
        <!-- Border Opacity -->
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
        <div class="q-gutter-xs bg-amber-alpha-2 q-pa-md">
          <div
            v-for="i in 5"
            :key="i"
            :class="`q-border-sentient-purple-alpha-${i * 2} q-border-lg`"
            class="q-pa-xs"
          >
            q-border-sentient-purple-alpha-{{ i * 2 }}
          </div>
        </div>
      </template>

      <template #5>
        <!-- Background Color Opacity -->
        <div class="scoped-style-description">
          <p><b>Background Color Opacity</b></p>
          <p>
            Use
            <code class="bg-grey-2 q-px-xs"
              >q-bg-{color variable}-alpha-{1 - 10}
            </code>
            for different background color transprancy.
          </p>
        </div>
        <div class="q-gutter-xs bg-amber-alpha-2 q-pa-md">
          <div
            v-for="i in 5"
            :key="i"
            :class="`bg-sentient-purple-alpha-${i * 2}`"
            class="q-pa-xs"
          >
            bg-sentient-purple-alpha-{{ i * 2 }}
          </div>
        </div>
      </template>

      <template #6>
        <!-- Shadow Color -->
        <div class="scoped-style-description">
          <p><b>Shadow Color</b></p>
          <p>
            Use
            <code class="bg-grey-2 q-px-xs"
              >q-shadow-{size variable}-{color variable}
            </code>
            for different background color transprancy.
          </p>
        </div>
        <div class="q-gutter-md q-pr-sm q-pt-xs q-pb-sm">
          <div
            v-for="color in colors"
            :key="color"
            :class="`shadow-sm-${color}`"
            class="q-pa-xs"
          >
            shadow-sm-${color}
          </div>
        </div>
      </template>

      <template #7>
        <!-- Text Color Opacity -->
        <div class="scoped-style-description">
          <p><b>Text Color Opacity</b></p>
          <p>
            Use
            <code class="bg-grey-2 q-px-xs"
              >text-{color variable}-alpha-{1 - 10}
            </code>
            for different text color color transprancy.
          </p>
        </div>
        <div class="q-gutter-xs q-pr-sm q-pt-xs q-pb-sm">
          <div
            v-for="i in 5"
            :key="i"
            :class="`text-sentient-purple-alpha-${i * 2}`"
            class="bg-grey-4 q-pa-xs"
          >
            {{ `text-sentient-purple-alpha-${i * 2}` }}
          </div>
        </div>
      </template>
      <template #8>
        <!-- Dividers -->
        <div class="scoped-style-description">
          <p><b>Dividers</b></p>
          <p>
            Use
            <code class="bg-grey-2 q-px-xs"
              >q-{horizontal / vertical}-divider
            </code>
            for vertical / horizontal dividers. Use
            <code class="bg-grey-2 q-px-xs">q-border-{width variable}</code> and
            <code class="bg-grey-2 q-px-xs">q-border-{color variable}</code> for
            differnt divider thickness and color
          </p>
        </div>
        <div class="q-gutter-xs">
          <div
            v-for="(v, i) in sizes"
            :key="i"
            :class="`q-vertical-divider q-border-${v} q-border-${colors[i]}`"
          >
            {{ `q-vertical-divider q-border-${v} q-border-${colors[i]}` }}
          </div>
          <div
            v-for="(v, i) in sizes"
            :key="i"
            :class="`q-horizontal-divider q-border-${v} q-border-${colors[i]}`"
          >
            {{ `q-horizontal-divider q-border-${v} q-border-${colors[i]}` }}
          </div>
        </div>
      </template>
    </Column4>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Column4 from 'src/components/containers/Column4.vue';
import FileDownloader from 'src/components/FileDownloader.vue';

export default defineComponent({
  name: '',
  props: { description: { type: String } },
  components: { Column4, FileDownloader },
  setup() {
    const fakeV = 'some fake data';
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
    const colors = [
      'sentient-beige',
      'sentient-green',
      'sentient-red',
      'sentient-purple',
      'amber',
      'cyan',
    ];
    return { sizes, colors, fakeV };
  },
});
</script>

<style scoped lang="scss">
.scoped-style-description {
  @media screen and (min-width: 599px) {
    height: 230px;
  }

  @media screen and (min-width: 1023px) {
    height: 230px;
  }

  @media screen and (min-width: 1439px) {
    height: 150px;
  }

  @media screen and(min-width: 1919px) {
    height: 140px;
  }
}
</style>
