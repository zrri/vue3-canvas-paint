import { createApp } from "vue";
import App from "./App.vue";
import { ElButton, ElColorPicker } from "element-plus";
import "element-plus/theme-chalk/index.css";

createApp(App).use(ElButton).use(ElColorPicker).mount("#app");
