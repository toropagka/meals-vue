<template>
  <header class="flex justify-between items-stretch bg-white shadow-md h-16">
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center hover:bg-purple-200 p-2"
    >
      Home
    </router-link>
    <div class="flex items-center">
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center px-2 h-full hover:bg-purple-200"
        >Search Meals</router-link
      >
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center px-2 h-full hover:bg-purple-200"
        >Meals By Letter</router-link
      >
      <router-link
        :to="{ name: 'ingredients' }"
        class="inline-flex items-center px-2 h-full hover:bg-purple-200"
        >Meals By Ingredient</router-link
      >
    </div>
  </header>
</template>
