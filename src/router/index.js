import { createRouter, createWebHistory } from 'vue-router';
import Quizes from '../views/Quizes.vue'
import QuizView from '../views/QuizView.vue'
const routes = [
  {
    path: '/',
    name: 'quizes',
    component:Quizes 
  },
  {
    path:"/quiz/:id",
    name:"quiz",
    component:QuizView
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
