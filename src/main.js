import { createApp } from "vue";
import router from "./router";
import vue3videoPlay from "vue3-video-play"; // 引入组件
import "vue3-video-play/dist/style.css"; // 引入css

import App from "./App.vue";
const app = createApp(App);
// import vue3videoPlay from "vue3-video-play"; // 引入组件
// import "vue3-video-play/dist/style.css"; // 引入css
app.use(vue3videoPlay);
app.use(router);
app.mount("#app");
