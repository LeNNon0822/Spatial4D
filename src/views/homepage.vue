<template>
  <backToTop class="backToTop" />
  <div class="pageContainer"><banner /><contents /></div>
</template>

<script setup>
import banner from "@/components/banner.vue";
import contents from "../components/contents.vue";
import backToTop from "../utils/backToTop.vue";
</script>

<style scoped>
.pageContainer {
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  min-width: 960px;
  height: fit-content;
  box-sizing: border-box;
  background-color: #f0f0f0;
}
.backToTop {
  z-index: 1000;
}
</style>
