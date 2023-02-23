<template>
  <header class="flex justify-between items-stretch bg-white shadow-md h-16">
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center text-red-600 font-bold"
    >
      Home
    </router-link>
    <div class="flex items-center">
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-red-600 hover:text-white"
        >Search Meals</router-link
      >
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-red-600 hover:text-white"
        >Meals By Letter</router-link
      >
      <router-link
        :to="{ name: 'ingredients' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-red-600 hover:text-white"
        >Meals By Ingredient</router-link
      >
    </div>
  </header>
</template>
