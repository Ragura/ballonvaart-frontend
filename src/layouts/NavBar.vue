<template>
  <nav class="fixed w-full gradient">
    <div
      class="container mx-auto flex flex-wrap justify-between items-center text-white p-2"
    >
      <div class="flex items-center text-2xl lg:text-4xl">
        <!-- Icon from <a href="https://icons8.com/icon/19806/hot-air-balloon">Hot Air Balloon icon by Icons8 -->
        <img
          class="h-8"
          src="https://img.icons8.com/color/48/000000/hot-air-balloon.png"
        />
        <span class="ml-4">ICARUS</span>
      </div>

      <div class="md:hidden">
        <button
          @click="toonMenu = !toonMenu"
          class="border border-white p-2 rounded focus:outline-none"
        >
          <svg
            class="fill-current w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <ul
        class="w-full md:flex md:items-center md:w-auto bg-white md:bg-transparent text-gray-800 text-center py-4"
        :class="{ hidden: !toonMenu }"
      >
        <li class="p-2">
          <router-link class="font-bold" to="/">Home</router-link>
        </li>
        <li class="p-2 md:ml-3">
          <router-link class="" to="/contact">Contacteer ons</router-link>
        </li>
        <li class="p-2 md:ml-3">
          <router-link class="" to="/aanmelden">Aanmelden</router-link>
        </li>
        <li class="md:ml-3">
          <button
            class="py-4 px-8 bg-blue-500 rounded-full text-white font-bold shadow-md"
          >
            BOEKEN
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      toonMenu: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
