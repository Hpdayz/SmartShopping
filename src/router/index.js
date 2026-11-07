import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入 路由 路径
import Login from '@/views/login'
import Layout from '@/views/layout'
import Search from '@/views/search/index.vue'
import SearchList from '@/views/search/list.vue'
import Prodetail from '@/views/prodetail'
import Pay from '@/views/pay'
import Order from '@/views/myorder'

// 导入 二级路由路径
import Home from '@/views/layout/home'
import Category from '@/views/layout/category.vue'
import Cart from '@/views/layout/cart.vue'
import User from '@/views/layout/user.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        { path: '/home', component: Home },
        { path: '/category', component: Category },
        { path: '/cart', component: Cart },
        { path: '/user', component: User }
      ]
    },
    { path: '/search', component: Search },
    { path: '/searchlist', component: SearchList },
    // 动态路由传参
    { path: '/prodetail/:id', component: Prodetail },
    { path: '/pay', component: Pay },
    { path: '/myorder', component: Order }
  ]
})

export default router
