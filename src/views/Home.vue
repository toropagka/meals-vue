<template>
  <h1 class="text-4xl font-bold mb-4 p-8 pb-0 text-red-600">Random Meals</h1>

  <div class="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <meal-item v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import MealItem from '../components/MealItem.vue';
import axiosClient from '../axiosClient';

const meals = ref([]);

onMounted(async () => {
  for (let i = 0; i < 9; i++) {
    axiosClient
      .get('random.php')
      .then(({ data }) => meals.value.push(data.meals[0]));
  }
});
</script>
