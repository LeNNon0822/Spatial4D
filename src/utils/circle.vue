<template>
  <div class="circle">
    <div class="left">
      <div class="leftCircle"></div>
    </div>
    <div class="right">
      <div class="rightCircle"></div>
    </div>
    <div class="circleFiller"></div>
    <div class="text"><slot></slot></div>
  </div>
</template>

<script setup></script>

<style scoped>
.circle {
  --theme-color: #209cee;
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  color: transparent;
  animation: showText 1s ease-in-out 2s both;
}

@keyframes showText {
  0% {
    color: transparent;
  }
  100% {
    color: #ffffff;
  }
}

.circleFiller {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* justify-content: center;
  align-items: center; */
  border-radius: 50%;
  background-color: transparent;
  animation: showColor 1s ease-in-out 1.75s both;
  box-shadow: 2px 8px 4px transparent;
}
@keyframes showColor {
  0% {
    background-color: transparent;
    box-shadow: 2px 8px 4px transparent;
  }
  100% {
    background-color: var(--theme-color);
    box-shadow: 2px 4px 2px #83cdff;
  }
}

.text {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.left {
  width: 50%;
  height: 100%;
  position: relative;
  overflow: hidden;
  /* background: pink; */
}

.leftCircle {
  width: 160%;
  height: 80%;
  border: 20px solid transparent;
  position: absolute;
  border-radius: 50%;
  left: 0px;
  top: 0px;
  border-bottom: 20px solid var(--theme-color);
  border-left: 20px solid var(--theme-color);
  transform: rotate(45deg);
  animation-name: circleLeft;
  animation-duration: 2s;
  animation-timing-function: linear;

  animation-iteration-count: 1;
}

.right {
  width: 50%;
  height: 100%;
  position: relative;
  overflow: hidden;
  margin: 0;
  /* background-color: pink; */
}

.rightCircle {
  width: 160%;
  height: 80%;
  border-radius: 50%;
  border: 20px solid transparent;
  position: absolute;
  border-top: 20px solid var(--theme-color);
  border-right: 20px solid var(--theme-color);
  right: 0px;
  top: 0px;
  animation-name: circleRight;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  transform: rotate(-135deg);
}

@keyframes circleRight {
  0% {
    transform: rotate(-135deg);
  }

  50%,
  100% {
    transform: rotate(45deg);
  }
}
@keyframes circleLeft {
  0%,
  50% {
    /* width: 101px; */
    transform: rotate(-135deg);
  }

  100% {
    transform: rotate(45deg);
  }
}
</style>
