import Vue from 'vue'
import Router from 'vue-router'

//导入组件，懒加载写法
const Home = () => import ("../views/home/Home")
const Cart=()=> import("../views/cart/Cart")
const Category=()=>import('../views/category/Category')
const Profile=()=>import('../views/profile/Profile')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/profile',
      component: Profile
    }
  ],
  //将路径由哈希模式改为history模式
  mode:'history',
})
