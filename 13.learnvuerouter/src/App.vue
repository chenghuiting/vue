<template>
  <div id="app">
    <h1>我是APP组件</h1>
<!--<router-link to="/home" tag="button" replace>首页</router-link>-->
    <!--<router-link to="/about">关于</router-link>-->
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    <!--<router-link v-bind:to="'/user/'+userId">用户</router-link>-->
    <!--<router-link to="/profile">档案</router-link>-->
    <!--<router-link :to="{path:'/profile',query:{name:'张三',age:19,height:199}}">档案</router-link>-->

    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>

    //Profile 和 About 是name属性
    <keep-alive exclude="Profile,About">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  //通过代码方式修改路由
  /*
  .push() => pushState (该方法可以后退)
  如果不想后退使用 .replace() 方法
  */
  data() {
    return {
      userId: "007",
    }
  },
  methods: {
    homeClick() {
      //this.$router.push('/home')
      this.$router.replace('/home')
      console.log("homeClick")
    },
    aboutClick() {
      this.$router.push('/about')
      console.log("aboutClick")
    },
    userClick(){
      this.$router.push('/user/'+this.userId)
    },
    profileClick(){
      this.$router.push({
        path:'/profile',
        query:{
          name:'张三',
          age:20,
          height:1.99
        }
      })
    }
  }
}
</script>

<style>
.router-link-active {
  color: #f00
}
</style>
