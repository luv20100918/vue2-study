import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import AboutPage from '@/views/AboutPage.vue'
import CurriculumIndex from '@/views/curriculum/CurriculumIndex.vue'
import Day1 from '@/views/curriculum/Day1.vue'
import Day2 from '@/views/curriculum/Day2.vue'
import Day3 from '@/views/curriculum/Day3.vue'
import Day4 from '@/views/curriculum/Day4.vue'
import Day5 from '@/views/curriculum/Day5.vue'
import Day6 from '@/views/curriculum/Day6.vue'
import Day7 from '@/views/curriculum/Day7.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/curriculum',
    name: 'Curriculum',
    component: CurriculumIndex
  },
  {
    path: '/curriculum/day1',
    name: 'Day1',
    component: Day1
  },
  {
    path: '/curriculum/day2',
    name: 'Day2',
    component: Day2
  },
  {
    path: '/curriculum/day3',
    name: 'Day3',
    component: Day3
  },
  {
    path: '/curriculum/day4',
    name: 'Day4',
    component: Day4
  },
  {
    path: '/curriculum/day5',
    name: 'Day5',
    component: Day5
  },
  {
    path: '/curriculum/day6',
    name: 'Day6',
    component: Day6
  },
  {
    path: '/curriculum/day7',
    name: 'Day7',
    component: Day7
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
