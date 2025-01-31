import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/Category/components/SubCategory.vue'
import CategoryHomePage from '@/views/Category/components/CategoryHomePage.vue'
import Detail from '@/views/Detail/index.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: 'category/:id',
          component: Category,
          children: [
            {
              path: '',
              component: CategoryHomePage
            },
            {
              path: 'sub/:subId',
              component: SubCategory
            }
          ]
        },
        {
          path: 'detail/:detailId',
          component: Detail
        }
      ]
    },
    {
      path: '/login',
      component: Login

    }
  ],
  //滚动条定制
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
