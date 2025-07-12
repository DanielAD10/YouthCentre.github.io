import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostCreate from '@/views/posts/PostCreate.vue'
import PostDetail from '@/views/posts/PostDetail.vue'
import TagsList from '@/views/posts/TagsList.vue'
import InfoPage from '@/views/InfoPage.vue'
import CourseView from '@/views/posts/CourseView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Youth Centre'
    }
  },
  {
    path: '/courses',
    name: 'courses',
    component: CourseView,
    meta: {
      title: 'Youth Centre'
    }
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
    props: true,
    meta: {
      title: 'Youth Centre'
    }
  },
  {
    path: '/tags/:tag',
    name: 'tag',
    component: TagsList,
    props: true,
    meta: {
      title: 'Youth Centre'
    }
  },
  {
    path: '/faqs',
    name: 'faqs',
    component: InfoPage,
    meta: {
      title: 'Youth Centre'
    }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Youth Centre'; // Set title based on meta
  next();
});

export default router
