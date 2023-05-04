import { createApp } from "vue";
import { createPinia } from 'pinia';
import "@/style.scss";
import App from "@/App.vue";
import router from "@/router";
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 使用 element-ui 圖標
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 使用狀態槽
const pinia = createPinia()
	

app.use(router).use(pinia).use(ElementPlus).mount("#app");
