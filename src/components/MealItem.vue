<template>
  <div class="bg-white shadow rounded-xl">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl h-48 w-full object-cover"
    /></router-link>
    <h3 class="p-3 font-bold">{{ meal.strMeal }}</h3>
    <p class="mb-4">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
      repellat blanditiis beatae iusto nam ea, porro assumenda rerum, reiciendis
      voluptatibus placeat deleniti eos a quo molestias? Rerum labore molestiae
      voluptas.
    </p>
    <source-buttons :href="meal.strYoutube" :source="meal.strSource" />
  </div>
</template>

<script setup>
import SourceButtons from './SourceButtons.vue';

const { meal } = defineProps({
  meal: Object,
});
</script>
