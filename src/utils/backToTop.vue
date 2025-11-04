<template>
  <button class="backToTopContainer cursorAnimation" @click="backToTop">
    <span class="backToTopIcon"></span>
  </button>
</template>

<script setup lang="ts">
const backToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};
</script>

<style scoped>
.backToTopContainer {
  /* visibility: hidden; */

  /* opacity: 0; */
  position: fixed;
  box-sizing: border-box;
  top: 85%;
  right: 2.5%;
  display: flex;
  width: 3vmax;
  border-radius: 0.5vmax;
  aspect-ratio: 1;
  border: none;
  background: linear-gradient(
    to top,
    hsl(210, 0%, 95%) 0%,
    #ffffff 35%,
    #ffffff 65%,
    hsl(210, 0%, 95%) 100%
  );
  z-index: 1000;
  box-shadow: 0px 2px 10px -1px hsla(210, 100%, 20%, 0.125),
    inset 0 6px 12px #f3f3f37f, inset 0 1px 10px #ffffff33;
  pointer-events: auto;
  cursor: pointer;
  padding: 0.5vmax;
}
.backToTopIcon {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("@/assets/icon/backtotop.svg");
}
</style>
