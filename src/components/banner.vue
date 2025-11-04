<template>
  <div class="bannerContainer">
    <div class="titleContainer">
      <div class="title">SI-Bench</div>
      <div class="subtitle">Placeholder---Placeholder---Placeholder</div>
    </div>
    <div class="arthorNameLine">
      <div class="arthorNameContainer">
        <span class="arthorName">AuthorName1</span
        ><span class="sup">1, 2, *</span><span class="arthorName">, </span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName">AuthorName2</span>
        <span class="sup">2, *</span><span class="arthorName">,</span>
      </div>
      <div class="arthorNameContainer">
        <span class="arthorName">AuthorName3</span>
        <span class="sup">1, 2</span><span class="arthorName"> </span>
      </div>
      <!-- <div class="arthorNameContainer">
          <span class="arthorName">Liangchen Tan</span>
          <span class="sup">4</span><span class="arthorName">, </span>
        </div>
        <div class="arthorNameContainer">
          <span class="arthorName">Junkun Hong</span>
          <span class="sup">1</span><span class="arthorName">, </span>
        </div>
        <div class="arthorNameContainer">
          <span class="arthorName">Gehan Hu</span>
          <span class="sup">1, 3</span><span class="arthorName">, </span>
        </div>
        <div class="arthorNameContainer">
          <span class="arthorName">Shuangyu Zhu</span>
          <span class="sup">1, 6</span><span class="arthorName">, </span>
        </div>
        <div class="arthorNameContainer">
          <span class="arthorName">Yimou Wu</span><span class="sup">3</span
          ><span class="arthorName">, </span>
        </div>
        <div class="arthorNameContainer">
          <span class="arthorName">Shaohan Jiang</span
          ><span class="sup">1, 3</span><span class="arthorName">, </span>
        </div>
        <div class="arthorNameContainer">
          <span class="arthorName">Ge Wang</span><span class="sup">1, 3</span
          ><span class="arthorName">, </span>
        </div>
        <div class="arthorNameContainer">
          <span class="arthorName">Yuyuan Yang</span><span class="sup">3</span
          ><span class="arthorName">, </span>
        </div>
        <div class="arthorNameContainer">
          <span class="arthorName">Junyuan Tan</span><span class="sup">1</span
          ><span class="arthorName">, </span>
        </div>
        <div class="arthorNameContainer">
          <span class="arthorName">Zhenglin Wan</span><span class="sup">5</span
          ><span class="arthorName">, </span>
        </div>
        <div class="arthorNameContainer">
          <span class="arthorName">Zhen Li</span><span class="sup">1, 2</span
          ><span class="arthorName">, </span>
        </div>
        <div class="arthorNameContainer">
          <span class="arthorName">Shuguang Cui</span
          ><span class="sup">1, 2</span><span class="arthorName">, </span>
        </div>
        <div class="arthorNameContainer">
          <span class="arthorName">Yiming Zhao</span
          ><span class="sup">1, 7, 8</span><span class="arthorName">, </span>
        </div>
        <div class="arthorNameContainer">
          <span class="arthorName">Yatong Han</span
          ><span class="sup">1, 8</span>
        </div> -->
    </div>
    <div class="expression">
      <div class="expressionItem">
        <span class="sup"> * </span
        ><span class="expressionText">Equal Contribution</span>
      </div>
    </div>

    <div class="group">
      <div class="groupContainer">
        <span class="sup"> 1 </span><span class="groupName">GroupName1 </span>
      </div>
      <div class="groupContainer">
        <span class="sup"> 2 </span><span class="groupName">GroupName2 </span>
      </div>
      <!-- <div class="groupContainer">
          <span class="sup"> 3 </span
          ><span class="groupName"
            >The Chinese group of Hong Kong, Shenzhen
          </span>
        </div>
        <div class="groupContainer">
          <span class="sup"> 4 </span
          ><span class="groupName">The group of Hong Kong </span>
        </div>
        <div class="groupContainer">
          <span class="sup"> 5 </span
          ><span class="groupName">Nanyang Technological group </span>
        </div>
        <div class="groupContainer">
          <span class="sup"> 6 </span
          ><span class="groupName"
            >Harbin Institute of Technology, Shenzhen
          </span>
        </div>
        <div class="groupContainer">
          <span class="sup"> 7 </span
          ><span class="groupName">Harbin Engineering group </span>
        </div>
        <div class="groupContainer">
          <span class="sup"> 8 </span
          ><span class="groupName">Infused Synapse AI </span>
        </div> -->
    </div>
    <div class="buttonGroup">
      <button
        class="button"
        onclick="window.open('https://arxiv.org/abs/2508.01415')"
        type="button"
      >
        <div class="arxivIcon"></div>
        arXiv
      </button>
      <button class="button" onclick="window.open()" type="button">
        <div class="gitHubIcon"></div>
        Code
      </button>
      <button class="button">
        <div class="huggingFaceIcon"></div>
        Benchmark
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.bannerContainer {
  display: flex;
  height: 720px;
  width: 100%;
  background-image: linear-gradient(to bottom, #000000fd 50%, #00000011 100%),
    url("@/assets/img/sander-weeteling-KABfjuSOx74-unsplash.jpg");
  background-size: cover;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: 10vmax 0; */
}

.titleContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* height: 100%; */
  margin-top: 20vh;
}

.title {
  display: flex;
  justify-content: center;
  font-size: 108px;
  font-family: "PS-heavy";
  color: #ffffff;
}
.subtitle {
  display: flex;
  margin: 20px 0 48px;
  justify-content: center;
  font-family: "PS-bold";
  font-size: 32px;
  color: #80b9fa;
}

.arthorNameLine {
  display: flex;
  width: 100%;
  font-family: "PH-medium";
  box-sizing: border-box;
  flex-wrap: wrap;
  padding: 0 20%;
  /* margin: 2.5vmax 0 0; */
  line-height: 1.5;
  font-size: 18px;
  justify-content: center;
}
.arthorNameContainer {
  display: flex;
  box-sizing: border-box;
  flex-shrink: 0;
  margin-right: 0.5vmax;
}
.arthorName {
  color: #209cee;
}
.sup {
  display: flex;
  vertical-align: top;
  flex-shrink: 0;
  font-size: 60%;
  margin-right: 0.25vmax;
  color: #ffffff;
  font-family: "PH-regular";
}
.expression {
  display: flex;
  margin: 1vmax 0 0;
  justify-content: center;
}
.expressionItem {
  display: flex;
  box-sizing: border-box;
  flex-shrink: 0;
  margin: 0 0.25vmax;
}
.expressionText {
  font-size: 1vmax;
  color: #ffffff;
  font-family: "PH-regular";
}
.group {
  display: flex;
  width: 100%;
  font-family: "PH-regular";
  box-sizing: border-box;
  flex-wrap: wrap;
  padding: 0 25%;
  margin: 1.5vmax 0 0;
  line-height: 1.5;
  font-size: 1.2vmax;
  justify-content: center;
}
.groupContainer {
  display: flex;
  box-sizing: border-box;
  flex-shrink: 0;
  margin-right: 1vmax;
}
.groupName {
  font-family: "PH-medium";
  color: #209cee;
}
.buttonGroup {
  display: flex;
  justify-content: center;
  margin: 1.5vmax 0 2.5vmax;
}
.button {
  display: flex;
  height: 2vmax;
  justify-content: center;
  align-items: center;
  font-family: "PH-regular";
  border-radius: 1.5vmax;
  border: #363636 solid 0px;
  background-color: #363636;
  color: #ffffff;
  padding: 1.5vmax;
  margin: 0.5vmax;
  font-size: 1vmax;
  cursor: pointer;
}
.button:hover {
  background-color: #474747;
}
.button.unfinished {
  background-color: #707070;
}
.button.unfinished:hover {
  background-color: #808080;
}
.arxivIcon {
  width: 1.5vmax;
  height: 1.5vmax;
  background-image: url("@/assets/icon/arxiv.png");
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 1vmax;
}
.gitHubIcon {
  width: 1.5vmax;
  height: 1.5vmax;
  background-image: url("@/assets/icon/github.png");
  background-size: contain;
  margin-right: 0.5vmax;
}
.huggingFaceIcon {
  width: 1.5vmax;
  height: 1.5vmax;
  background-image: url("@/assets/icon/huggingface.png");
  background-size: contain;
  margin-right: 0.5vmax;
}
</style>
