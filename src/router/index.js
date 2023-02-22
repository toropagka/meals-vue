import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '../components/DefaultLayout.vue';
import GuestLayout from '../components/GuestLayout.vue';
import Home from '../views/Home.vue';
import SearchByIngredient from '../views/SearchByIngredient.vue';
import SearchByName from '../views/SearchByName.vue';
import SearchByLetter from '../views/SearchByLetter.vue';
import MealDetails from '../views/MealDetails.vue';
import OneIngredient from '../views/OneIngredient.vue';

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/by-name/:name?',
        name: 'byName',
        component: SearchByName,
      },
      {
        path: '/by-ingredient/:ingredient?',
        name: 'byIngredient',
        component: SearchByIngredient,
      },
      {
        path: '/ingredients',
        name: 'ingredients',
        component: OneIngredient,
      },
      {
        path: '/by-letter/:letter?',
        name: 'byLetter',
        component: SearchByLetter,
      },
      {
        path: '/meal/:id',
        name: 'mealDetails',
        component: MealDetails,
      },
    ],
  },
  {
    path: '/guest',
    component: GuestLayout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
