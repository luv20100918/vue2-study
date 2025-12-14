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
import Day8 from '@/views/curriculum/Day8.vue'
import Day9 from '@/views/curriculum/Day9.vue'
import Day10 from '@/views/curriculum/Day10.vue'
import Day11 from '@/views/curriculum/Day11.vue'
import Day12 from '@/views/curriculum/Day12.vue'
import Day13 from '@/views/curriculum/Day13.vue'
import Day14 from '@/views/curriculum/Day14.vue'

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
  },
  {
    path: '/curriculum/day8',
    name: 'Day8',
    component: Day8
  },
  {
    path: '/curriculum/day9',
    name: 'Day9',
    component: Day9
  },
  {
    path: '/curriculum/day10',
    name: 'Day10',
    component: Day10
  },
  {
    path: '/curriculum/day11',
    name: 'Day11',
    component: Day11
  },
  {
    path: '/curriculum/day12',
    name: 'Day12',
    component: Day12
  },
  {
    path: '/curriculum/day13',
    name: 'Day13',
    component: Day13
  },
  {
    path: '/curriculum/day14',
    name: 'Day14',
    component: Day14
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
