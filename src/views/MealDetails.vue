<template>
  <div class="max-w-[800px] mx-auto flex flex-col text-center">
    <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%]" />
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-5 text-lg py-2">
      <div>
        <strong class="font-bold">Category:</strong> {{ meal.strCategory }}
      </div>
      <div><strong class="font-bold">Area:</strong> {{ meal.strArea }}</div>
      <div><strong class="font-bold">Tags:</strong> {{ meal.strTags }}</div>
    </div>

    <div class="my-3">
      {{ meal.strInstructions }}
    </div>

    <div class="grid grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul v-for="(_, index) of new Array(20)">
          <li v-if="meal[`strIngredient${index + 1}`]">
            {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }}
          </li>
        </ul>
      </div>

      <div>
        <h2 class="text-2xl font-semibold mb-3">Measures</h2>
        <ul v-for="(_, index) of new Array(20)">
          <li
            v-if="
              meal[`strMeasure${index + 1}`] &&
              meal[`strMeasure${index + 1}`].trim()
            "
          >
            {{ index + 1 }}. {{ meal[`strMeasure${index + 1}`] }}
          </li>
        </ul>
      </div>
    </div>
    <source-buttons :href="meal.strYoutube" :source="meal.strSource" />
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';
import SourceButtons from '../components/SourceButtons.vue';

const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});
</script>
