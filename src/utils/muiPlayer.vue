<template>
  <div id="muiplayer"></div>
</template>

<script setup>
import "mui-player/dist/mui-player.min.css";
import MuiPlayer from "mui-player";
// const props = defineProps(["id", "src"]);
var mp = new MuiPlayer({
  width: "320px", //播放器宽度
  height: "180px", //播放器高度
  lang: "zh-cn",
  autoFit: false,
  themeColor: "#409eff",
  container: "#muiplayer",
  src: "../assets/mp4/ObjectSizeEstimation1.mp4",
});
</script>

<style scoped></style>
