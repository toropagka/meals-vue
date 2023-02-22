<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-4 text-center">Ingredients</h1>
    <input
      type="text"
      class="rounded border-2 border-gray-200 w-full mb-3"
      placeholder="Search for Ingredients"
      v-model="keyword"
    />
    <router-link
      :to="{
        name: 'byIngredient',
        params: { ingredient: ingredient.strIngredient },
      }"
      v-for="ingredient of computedIngredients"
      :key="ingredient.idIngredient"
      class="block bg-white rounded p-3 mb-3 shadow-2xl"
    >
      <h3 class="text-2xl font-bold">{{ ingredient.strIngredient }}</h3>
      <h3 class="">{{ ingredient.strDescription }}</h3>
    </router-link>
  </div>
</template>
<script setup>
import { computed } from '@vue/reactivity';
import { onMounted, ref } from 'vue';
import axiosClient from '../axiosClient';

const keyword = ref('');
const ingredients = ref([]);
const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredients;
  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

onMounted(() => {
  axiosClient.get('list.php?i=list').then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>
