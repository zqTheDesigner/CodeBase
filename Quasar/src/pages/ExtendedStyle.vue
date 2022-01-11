<template>
  <q-page class="q-pa-lg">
    <h3 class="q-mx-none">Extended Style</h3>
    <div class="q-mb-lg">
      <i>Last update: 2022 Jan 06</i>
    </div>

    <div v-html="description" class="q-mb-lg" />

    <div class="row items-center q-mb-md">
      <p class="q-pa-ma-none">Download q-extended-style.scss</p>
      <FileDownloader
        class="q-mx-sm"
        url="https://raw.githubusercontent.com/zqTheDesigner/CodeBase/main/Quasar/src/css/q-extended-style.scss"
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

    <Columns
      num-blocks="9"
      num-columns="3"
      content-class="q-mb-xl q-pb-xl q-horizontal-divider"
    >
      <!-- This syntax #1 is equals to v-slot="1" attribute -->
      <template #1>
        <!-- Borders -->
        <div class="scoped-style-description">
          <p><b>Borders</b></p>
          <p>
            Use
            <code>q-border-{size variable} </code>
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
            <code>q-border-round-{1 to 99} </code>
            for different border radius. Can use together with
            <code>q-border-{size variable}</code>
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
            <code>q-border-{color variable} </code>
            for different border colors, include Sentient.io colors and all
            quasar colors. Can use together with
            <code>q-border-{size variable}</code>
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
            <code>q-border-{color variable}-alpha-{1 - 10} </code>
            for different border color transprancy. Can use together with
            <code>q-border-{size variable}</code>
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
            <code>q-bg-{color variable}-alpha-{1 - 10} </code>
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
            <code>q-shadow-{size variable}-{color variable} </code>
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
            <code>text-{color variable}-alpha-{1 - 10} </code>
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
            <code>q-{horizontal / vertical}-divider </code>
            for vertical / horizontal dividers. Use
            <code>q-border-{width variable}</code> and
            <code>q-border-{color variable}</code> for differnt divider
            thickness and color
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

      <template #9>
        <!-- Additional border classes -->
        <div class="scoped-style-description">
          <p><b>Additional border classes</b></p>
          <p>
            Use
            <code>q-border-{ {{ additionalBorderVar }} } </code>
            for special border appearance. Must use width
            <code>q-border-{width variable}</code> and
            <code>q-border-{color variable}</code>.
          </p>
        </div>
        <div class="row q-gutter-sm">
          <div
            v-for="(v, i) in additionalBorderVar"
            :key="i"
            :class="`bg-grey-2 col-5 q-border-${v} q-border-${
              colors[i] ? colors[i] : colors[i - 6] ? colors[i - 6] : colors[4]
            } q-border-md`"
          >
            {{
              `q-border-${v} q-border-${
                colors[i]
                  ? colors[i]
                  : colors[i - 6]
                  ? colors[i - 6]
                  : colors[4]
              } q-border-md`
            }}
          </div>
        </div>
      </template>
    </Columns>

    <p>
      <b>
        Below are some additional classes can use together with Quasar
        components:
      </b>
    </p>

    <ul class="column q-gutter-lg">
      <li>
        <code>.no-underline</code>
        <p>
          Will remove the underline for
          <router-link to="#" class="no-underline"
            >&lt;router-link&gt;</router-link
          >
          or <a href="#" class="no-underline">&lt;a&gt;</a> element.
        </p>
        <b>HTML Example: </b
        ><code>
          &lt;router-link to="#" class="no-underline"&gt; router-link
          &lt;/router-link&gt;</code
        >
      </li>

      <li>
        <code>.underline</code>
        <p>
          Add customised underline to <i class="underline">specific element</i>.
          <code>.underline</code> is essentially
          <code>.q-horizontal-divider</code> so you can use any border related
          class to control the
          <b class="underline q-border-red">color</b> (<code
            >class="underline q-border-red"</code
          >)and the <b class="underline q-border-lg">thickness</b> (<code
            >class="underline q-border-lg"</code
          >)
        </p>
        <b>HTML Example: </b
        ><code> &lt;i class="underline"&gt;specific element&lt;/i&gt;</code>
      </li>

      <li>
        <code>.q-pa-ma-none</code>
        <p>Will simply remove both padding and margin for an element</p>
      </li>

      <li>
        <code>.q-no-dropdown-arrow</code>
        <p>
          For some rare case, you can use this class to remove the dropdown
          arrow <q-icon name="arrow_drop_down" /> for &lt;q-btn-dropdown&gt;
          element.
        </p>
        <q-btn-dropdown no-caps label="Click Me">
          <div class="q-mx-md">
            <h3>👻 Boo!</h3>
            <p>There is a dropdown arrow!</p>
          </div>
        </q-btn-dropdown>

        <q-btn-dropdown no-caps label="Click Me" dropdown-icon=" ">
          <div class="q-mx-md" style="width: 320px">
            <h3>👻 Boo!</h3>
            <p>
              You can also use <code>dropdown-icon=" "</code> attribute to
              remove the triangle, but look at the blank space, the container is
              still there!
            </p>
          </div>
        </q-btn-dropdown>

        <q-btn-dropdown no-caps label="Click Me" class="q-no-dropdown-arrow">
          <div class="q-mx-md" style="width: 320px">
            <h3>👻 Boo!</h3>
            <p>
              Not only the triangle arrow been removed, the empty space is also
              gone
            </p>
          </div>
        </q-btn-dropdown>
        <br />
        <b>HTML Example: </b
        ><code>
          &lt;q-btn-dropdown class="q-no-dropdown-arrow"&gt; Some Content
          &lt;/q-btn-dropdown&gt;</code
        >

        <q-expansion-item
          class="q-my-sm q-border-xs q-no-dropdown-arrow"
          label="Click Me"
        >
          <div class="q-mx-md">
            <h3>👻 Boo!</h3>
            <p>
              Same class also can be used on &lt;q-expansion-item&gt; to remove
              the drop down arrow
            </p>
          </div>
        </q-expansion-item>
        <b>HTML Example: </b
        ><code>
          &lt;q-expansion-item class="q-no-dropdown-arrow"&gt; Some Content
          &lt;/q-expansion-item&gt;</code
        >
      </li>
    </ul>

    <div style="height: 200px"></div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Columns from 'src/containers/Columns.vue';
import FileDownloader from 'src/components/FileDownloader.vue';

export default defineComponent({
  name: '',
  props: { description: { type: String } },
  components: { Columns, FileDownloader },
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
    const additionalBorderVar = [
      'T',
      '7',
      'L',
      'J',
      'C',
      'D',
      'U',
      'N',
      'x',
      'y',
      'l',
      'r',
      't',
      'b',
    ];
    return { sizes, colors, fakeV, additionalBorderVar };
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
    height: 170px;
  }

  @media screen and(min-width: 1919px) {
    height: 170px;
  }
}


</style>
