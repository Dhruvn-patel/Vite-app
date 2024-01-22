import "./assets/main.css";
import "./index.css";
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
import Particles from "@tsparticles/vue3";
import { loadFull } from "tsparticles";
import { loadSlim } from "@tsparticles/slim";
app.use(createPinia());
app.use(router);
app.use(Particles, {
  init: async (engine) => {
    await loadFull(engine); // you can load the full tsParticles library from "tsparticles" if you need it
    // await loadSlim(engine); // or you can load the slim version from "@tsparticles/slim" if don't need Shapes or Animations
  },
});
// app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
