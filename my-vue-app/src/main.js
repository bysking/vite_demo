import { createApp } from "vue";
import MainApp from "./App.vue";

import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";

const App = createApp(MainApp);

App.use(ElementPlus);

App.mount("#app");
