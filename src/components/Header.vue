<template>
  <nav>
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4
      text-xl"
    >
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="self-center text-2xl">DN</span>
      </a>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2"
        :class="{ hidden: isToogle }"
        aria-controls="navbar-default"
        @click="toogleModal"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2"
        :class="{ hidden: !isToogle }"
        @click="toogleModal"
      >
        X
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md: dark: md:dark: dark:"
        >
          <li v-for="data in headerData" :key="data">
            <router-link :to="{ name: data.name }" @click="routePath(data.name)">
              <span  :class="{'font-medium':routeLink==data.name}">
                {{ data.label }}
              </span>
            </router-link>
          </li>
        </ul>
      </div>

      <div
        class="md:hidden w-full bg-[#fff] z-10 absolute left-0 md:w-auto md:h-full absolute top-[50px]"
        :class="{ hidden: !isToogle }"
      >
        <ul
          class="font-medium flex flex-col w-full items-center gap-[40px] p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0"
        >
          <li v-for="data in headerData" :key="data" @click="toogleModal">
            <router-link :to="{ name: data.name }">
              <span>
                {{ data.label }}
              </span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { headerInfo } from "../data/userInfo.js";
export default {
  name: "Header",
  data() {
    return {
      isToogle: false,
      headerData: headerInfo,
      routeLink:'home'
    };
  },
  methods: {
    toogleModal() {
      this.isToogle = !this.isToogle;
    },
    routePath(name){
      this.routeLink=name
    }
  },
};
</script>
<style scoped></style>
