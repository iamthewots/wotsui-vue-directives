import { createApp } from "vue";
import App from "./App.vue";
import WotsUIDirectives from "./directives/index";

const app = createApp(App);
app.use(WotsUIDirectives);
app.mount("#app");
