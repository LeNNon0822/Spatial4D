<template>
  <vue3-video-play v-bind="options" @contextmenu.prevent />
</template>

<script setup>
import "vue3-video-play/dist/style.css";
import { videoPlay } from "vue3-video-play";
import { reactive } from "vue";
const props = defineProps(["src"]);
console.log("Video source:", props.src);
const options = reactive({
  width: "320px", //播放器宽度
  height: "180px", //播放器高度
  color: "#409eff", //主题色
  title: "", //视频名称
  src: props.src, //视频源
  muted: false, //静音
  webFullScreen: false,
  speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //播放倍速
  autoPlay: false, //自动播放
  loop: false, //循环播放
  mirror: false, //镜像画面
  ligthOff: false, //关灯模式
  volume: 1, //默认音量大小
  // controls: false,
  controlBtns: [
    "audioTrack",
    "quality",
    // "speedRate",
    "volume",
    // "setting",
    "pip",
    "pageFullScreen",
    // "fullScreen",
  ], //显示所有按钮,
});
</script>

<style scoped>
/* 禁用右键 */
:deep(.d-player-contextmenu) {
  :deep(.d-player-contextmenu-body) {
    display: none;
  }
}
</style>
