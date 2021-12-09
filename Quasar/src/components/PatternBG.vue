<template>
  <div
    style="height: 100vh"
    class="column justify-between items-center no-wrap"
  >
    <div class="q-pa-lg full-width">
      <slot name="Logo"></slot>
    </div>

    <div class="column items-center justify-center col-grow">
      <div class="q-pa-xl">
        <slot name="Header"></slot>
      </div>

      <div class="text-center">
        <slot name="Illustration"></slot>
      </div>
    </div>

    <div
      class="absolute-left fit bg-amber-2"
      style="z-index: -1; overflow: hidden"
    >
      <div class="absolute-left" id="triangle-left">
        <img
          src="~assets/decorations/triangle-outline-orange.png"
          style="width: 100%; opacity: 0.6"
        />
      </div>
      <div class="triangle absolute-top">
        <img
          class="absolute-center bubbleBounce"
          src="~assets/decorations/circle-white.png"
          style="width: 20px"
        />
        <img
          src="~assets/decorations/triangle-solid-orange.png"
          style="width: 100%; opacity: 0.6"
        />
      </div>
      <div class="triangle absolute-top parallelTopRight">
        <img
          src="~assets/decorations/triangle-outline-orange.png"
          style="width: 100%; opacity: 0.6"
        />
      </div>

      <div id="triangle-set-bottom-right" class="absolute-bottom-right">
        <img
          src="~assets/decorations/triangle-outline-orange.png"
          style="width: 60%; top: 42%; left: 26%; opacity: 0.6"
          class="absolute"
        />
        <img
          src="~assets/decorations/triangle-solid-orange.png"
          style="width: 40%; top: 40%; left: 45%"
          class="absolute parallelTopLeft"
        />
      </div>

      <div class="absolute-bottom-right">
        <img
          src="~assets/decorations/triangle-solid-orange.png"
          style="width: 70%"
          id="triangle-bottom"
        />
      </div>

      <div>
        <img
          src="~assets/decorations/triangle-solid-orange.png"
          style="width: 40%"
          id="triangle-right"
          class="absolute-right"
        />
      </div>

      <div
        class="circle absolute-bottom-left bg-amber-1-alpha-2 bubbleBounce"
      ></div>

      <div id="confetti" class="absolute fit">
        <img
          class="absolute-center"
          src="~assets/decorations/circle-white.png"
          style="width: 26px; top: 20%; left: 20%"
        />
        <img
          class="absolute-center"
          src="~assets/decorations/circle-white.png"
          style="width: 12px; top: 27%; left: 44%"
        />
        <img
          class="absolute-center"
          src="~assets/decorations/circle-white.png"
          style="width: 30px; top: 51%; left: 60%"
        />
        <img
          class="absolute-center"
          src="~assets/decorations/triangle-outline-white.png"
          style="width: 20px; top: 52%; left: 55%; transform: scaleX(-1)"
        />
        <img
          class="absolute-center"
          src="~assets/decorations/triangle-outline-white.png"
          style="width: 16px; top: 50%; left: 70%"
        />
        <img
          class="absolute-center"
          src="~assets/decorations/triangle-outline-white.png"
          style="width: 10px; top: 46%; left: 40%; transform: scaleX(-1)"
        />
        <img
          class="absolute-center"
          src="~assets/decorations/triangle-outline-white.png"
          style="width: 24px; top: 55%; left: 20%"
        />
      </div>

      <div>
        <img
          class="absolute-bottom slideInRight"
          src="~assets/decorations/wave-line-sort.png"
          style="width: 100px; left: 6%; bottom: 75%; animation-duration: 8s"
        />
        <img
          class="absolute-bottom slideInRight"
          src="~assets/decorations/wave-line-sort.png"
          style="width: 200px; left: 6%; bottom: 6%"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {
      testClick: () => {
        console.log('test')
      }
    }
  }
})
</script>

<style scoped>
.circle {
  width: clamp(40px, 60vh, 45vw);
  height: clamp(40px, 60vh, 45vw);
  border-radius: 999px;
  left: -10%;
  bottom: -10%;
}

.triangle {
  width: clamp(40px, 40vh, 45vw);
  height: clamp(40px, 40vh, 45vw);
  left: 40%;
  top: -8%;
  transform: scale(0.6);
}

.bubbleBounce {
  animation-name: bubbleBounce;
  animation-duration: 30s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

.parallelTopRight {
  animation-name: parallelTopRight;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

.parallelTopLeft {
  animation-name: parallelTopLeft;
  animation-duration: 5s;
  animation-iteration-count: infinite;
}

.rotate {
  animation-name: rotate;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

.slideInRight {
  animation-name: slideInRight;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

#triangle-left {
  width: clamp(40px, 30vh, 45vw);
  height: clamp(40px, 30vh, 45vw);
  left: -10%;
  top: 20%;
  animation-name: rotate;
  animation-duration: 20s;
  opacity: 0.5;
  animation-iteration-count: infinite;
}

#triangle-bottom {
  width: clamp(40px, 50vh, 45vw);
  animation-name: reverseRotate;
  animation-duration: 30s;
  opacity: 0.05;
  animation-iteration-count: infinite;
}

#triangle-right {
  width: clamp(40px, 50vh, 45vw);
  animation-name: bubbleBounce2;
  animation-duration: 50s;
  top: 20%;
  opacity: 0.05;
  animation-iteration-count: infinite;
}

#confetti img {
  animation-name: rotate;
  animation-duration: 10s;
  animation-iteration-count: infinite;
}

#confetti {
  animation-name: scaleBounce;
  animation-duration: 10s;
  animation-iteration-count: infinite;
}

#triangle-set-bottom-right {
  width: clamp(40px, 30vh, 30vw);
  height: clamp(40px, 30vh, 30vw);
}
</style>
