import Vue from 'vue'
import Router from 'vue-router'

// import Home from "../components/Home";
// import About from "../components/About";
// import User from "../components/User";

//懒加载写法
const Home=()=>import('../components/Home')
const About=()=>import('../components/About')
const User=()=>import('../components/User')
const HomeNews=()=>import('../components/HomeNews')
const HomeMessage=()=>import('../components/HomeMessage')
const Profile=()=>import('../components/Profile')

//1.通过Vue.use(插件)，安装插件；
Vue.use(Router)

//2.创建Router对象；
//3.将Router对象传入到vue实例
const router=new Router({
  //配置路由和组件之间的映射关系
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      meta:{
        title:"首页"
      },
      path: '/home',
      component: Home,
      children:[
        {
          path:'',
          redirect:'news'
        },
        {
          path:'news',
          component:HomeNews
        },
        {
          path:'message',
          component:HomeMessage
        }
      ]
    },
    {
      meta:{
        title:"关于"
      },
      path: '/about',
      component: About
    },
    {
      meta:{
        title:"用户"
      },
      path: '/user/:abc',
      component: User
    },
    {
      path: '/profile',
      component: Profile,
      meta:{
        title:"档案"
      }
    }
  ],
  mode: 'history',
})

router.beforeEach((to,from,next)=>{
  //从 from 跳转到 to
  document.title=to.matched[0].meta.title
  console.log(to)
  next()
})

export default router


