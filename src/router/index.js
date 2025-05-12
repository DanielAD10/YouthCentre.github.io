import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostCreate from '@/views/posts/PostCreate.vue'
import PostDetail from '@/views/posts/PostDetail.vue'
import TagsList from '@/views/posts/TagsList.vue'
import InfoPage from '@/views/InfoPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/create-post',
    name: 'create',
    component: PostCreate
  },
  {
    path: '/posts/:id',
    name: 'detail',
    component: PostDetail,
    props: true
  },
  {
    path: '/tags/:tag',
    name: 'tag',
    component: TagsList,
    props: true
  },
  {
    path: '/faqs',
    name: 'faqs',
    component: InfoPage
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
