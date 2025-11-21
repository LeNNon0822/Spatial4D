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
import { onMounted, onUpdated } from "vue";

// 刷新回归顶点
onMounted(() => {
  window.scrollTo(0, 0);
  nextTick(() => {
    window.scrollTo(0, 0);
  });
  // 延迟执行
  setTimeout(() => {
    window.scrollTo(0, 0);
    console.log("生产环境延迟重置执行");
  }, 500); // 生产环境可能需要更长时间

  // 额外延迟保障
  setTimeout(() => {
    if (window.scrollY !== 0) {
      window.scrollTo(0, 0);
      console.log("二次检查重置执行");
    }
  }, 1000);

  // 禁用浏览器滚动记忆
  if (history.scrollRestoration) {
    history.scrollRestoration = "manual";
  }
});
onUpdated(() => {
  setTimeout(() => {
    if (window.scrollY > 100) {
      // 设置一个阈值，避免微小偏移
      console.log("检测到异常滚动，重新重置位置");
      window.scrollTo(0, 0);
    }
  }, 300);
});
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
