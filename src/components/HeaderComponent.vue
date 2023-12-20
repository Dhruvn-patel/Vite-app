<template>
  <!-- <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </header> -->

  <nav>
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      
    >
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="self-center text-2xl">DN</span>
      </a>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2"
        :class="{'hidden':isToogle}"
        aria-controls="navbar-default"
        @click="isToogle = !isToogle"
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
        :class="{'hidden':!isToogle}"
        @click="isToogle = !isToogle"
      >
        X
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md: dark: md:dark: dark:"
        >
          <li>
            <a
              href="#"
              class="block py-2 px-3 rounded md:bg-transparent md: md:p-0 dark: md:dark:"
              aria-current="page"
              >Home</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-3 rounded md:bg-transparent md: md:p-0 dark: md:dark:"
              >About</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-3 rounded md:bg-transparent md: md:p-0 dark: md:dark:"
              >Skills</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-3 rounded md:bg-transparent md: md:p-0 dark: md:dark:"
              >Projects</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-3 rounded md:bg-transparent md: md:p-0 dark: md:dark:"
              >Contact</a
            >
          </li>
        </ul>
      </div>

      <div
        class="md:hidden md:w-auto md:h-full absolute top-[50px]"
        :class="{ hidden: !isToogle }"
      >
        <ul
          class="font-medium flex flex-col items-center  gap-4 p-4 md:p-0 mt-4  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0"
        >
          <li>
            <a
              href="#"
              class="block py-2 px-3 rounded md:bg-transparent md: md:p-0 dark: md:dark:"
              aria-current="page"
              >Home</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-3 rounded md:bg-transparent md: md:p-0 dark: md:dark:"
              >About</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-3 rounded md:bg-transparent md: md:p-0 dark: md:dark:"
              >Skills</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-3 rounded md:bg-transparent md: md:p-0 dark: md:dark:"
              >Projects</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-3 rounded md:bg-transparent md: md:p-0 dark: md:dark:"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      isToogle: false,
    };
  },
};
</script>
<style scoped></style>
