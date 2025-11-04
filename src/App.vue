<template>
  <RouterView />
</template>

<script setup>
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { RouterView } from "vue-router";
const lenis = new Lenis({
  lerp: 0.1,
  smoothWheel: true,
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

lenis.on("scroll", () => ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);
</script>

<style scoped>
html.lenis,
html.lenis body {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: unset !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-scrolling iframe {
  pointer-events: none;
}

* {
  word-break: normal;
  word-wrap: break-word;
  --main-color: #209cee;
}
body {
  /* word setting */
  font-family: "PS-regular", "PH-regular";
}

@font-face {
  font-family: "PH-regular";
  font-display: swap;
  src: url("./assets/font/Alibaba-PuHuiTi-Regular.ttf") format("truetype");
}
@font-face {
  font-family: "PH-medium";
  font-display: swap;
  src: url("./assets/font/Alibaba-PuHuiTi-Medium.ttf") format("truetype");
}

@font-face {
  font-family: "PH-heavy";
  font-display: swap;
  src: url("./assets/font/Alibaba-PuHuiTi-Heavy.ttf") format("truetype");
}
@font-face {
  font-family: "PH-bold";
  font-display: swap;
  src: url("./assets/font/Alibaba-PuHuiTi-Bold.ttf") format("truetype");
}

@font-face {
  font-family: "PS-regular";
  font-display: swap;
  src: url("./assets/font/ProductSans-Regular.ttf") format("truetype");
}
@font-face {
  font-family: "PS-medium";
  font-display: swap;
  src: url("@/assets/font/ProductSans-Medium.ttf") format("truetype");
}
@font-face {
  font-family: "PS-bold";
  font-display: swap;
  src: url("@/assets/font/ProductSans-Bold.ttf") format("truetype");
}
@font-face {
  font-family: "PS-heavy";
  font-display: swap;
  src: url("@/assets/font/ProductSans-Black.ttf") format("truetype");
}

a,
a:active,
a:hover,
a:focus,
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
