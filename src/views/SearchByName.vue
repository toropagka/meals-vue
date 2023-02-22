<template>
  <div class="p-8 pb-0">
    <input
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for Meals"
      v-model="keyword"
      @change="searchMeals"
    />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <meal-item v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import store from '../store';
import MealItem from '../components/MealItem.vue';

const route = useRoute();
const keyword = ref('');
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  if (keyword.value) {
    store.dispatch('searchMeals', keyword.value);
  } else {
    store.commit('setSearchedMeals', []);
  }
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) searchMeals();
});
</script>
