<template>
  <q-page class="q-pa-lg">
    <h3 class="q-mx-none">Typography</h3>
    <div class="q-mb-lg">
      <i>Last update: 2022 Jan 06</i>
    </div>

    <div class="row items-center q-mb-md">
      <p class="q-pa-ma-none">Download typography.scss</p>
      <FileDownloader
        class="q-mx-sm"
        url="https://raw.githubusercontent.com/zqTheDesigner/CodeBase/main/Quasar/src/css/typography.scss"
      />

      <div
        class="q-ma-lg q-pa-lg bg-green-alpha-2 q-border-round-8 q-border-x q-border-md q-border-green"
      >
        In case your project is not auto compiling scss. You can use
        <a href="https://beautifytools.com/scss-compiler.php" target="_blank"
          >this online scss compilier</a
        >to convert it to css. All you need to do is download the .scss file and
        copy everything to the compilier. All the syntax below will still works
        in css file.
      </div>
    </div>
    <div v-html="description" class="q-mb-lg" />
    <div class="q-horizontal-divider">
      <h1>Header 1</h1>
      <h2>Header 2</h2>
      <h3>Header 3</h3>
      <h4>Header 4</h4>
      <h5>Header 5</h5>
      <h6>Header 6</h6>
      <p>Paragraph of text</p>
    </div>

    <div>
      <h6 class="q-my-sm">To use typography.scss</h6>
      <p>
        Add google font name to scss variable on top part of the file
        <code>$bodyFont</code> and <code>$headerFont</code>
      </p>
    </div>

    <div>
      <Columns num-blocks="1" num-columns="3">
        <template #1>
          <!-- Font Weight -->
          <p><b>Font Weight</b></p>
          <p>
            Use <code>.font-weight-{100 to 900}</code> to set different font
            weights
          </p>
          <p
            v-for="i in 9"
            :key="i"
            :class="`font-weight-${i * 100}`"
            class="q-my-none"
          >
            {{ `font-weight-${i * 100}` }}
          </p>
        </template>
      </Columns>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import FileDownloader from 'src/components/FileDownloader.vue';
import Columns from 'src/containers/Columns.vue';

export default defineComponent({
  props: { description: { type: String } },
  components: { FileDownloader, Columns },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
