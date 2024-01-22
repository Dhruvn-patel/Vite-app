import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
// import Skills from "../components/Skills.vue";
import Projects from "../components/Projects.vue";
import Contact from "../components/Contact.vue";
import Resume from "../components/Resume.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects,
    },
    {
      path: "/resume",
      name: "resume",
      component: Resume,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },

  ],
});

export default router;
