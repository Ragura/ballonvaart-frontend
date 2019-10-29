<template>
  <div class="pt-24 max-w-4xl mx-auto flex flex-wrap">
    <div class="flex items-center w-full md:w-1/2 md:order-1 md:px-6 ">
      <img src="@/assets/contact.svg" alt="Afbeelding contactformulier" />
    </div>
    <form class="w-full md:w-1/2 p-8">
      <h2 class="text-2xl text-center md:text-left text-gray-900">
        Contacteer ons
      </h2>
      <div class="mt-4">
        <label class="block text-gray-800 text-sm font-bold" for="naam"
          >Naam
        </label>
        <input
          class="w-full mt-1 py-2 px-3 border rounded text-gray-800 shadow focus:outline-none focus:shadow-outline"
          type="text"
          id="naam"
          placeholder="Naam"
        />
        <p class="text-red-500 mt-1 text-xs italic">Vul je naam in.</p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style lang="scss" scoped></style>
