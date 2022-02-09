<template>
  <div>
    <doc-header :detail="detail" />

    <div>
      <b>Syntax:</b>
      <code> class='text-red-opacity-low' :class='elevation_{1 to 24}' </code>
      <p>
        The box-shadow property's default color is the color property, this
        quick hack will cause the text display within the container error, so
        have to re-set text color inside the container.
      </p>
    </div>

    <div class="row">
      <div v-for="i in 24" :key="i">
        <div class="cube text-red-opacity-low" :class="`elevation_${i}`">
          <p class="q-pa-sm text-black">
            text-red-opacity-low elevation_{{ i }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { detail: {} },
};
</script>

<style lang="scss" scoped>
.cube {
  width: 100px;
  height: 100px;
  margin: 40px;
}
</style>
