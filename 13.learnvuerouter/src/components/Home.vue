<template>
<div>
  <h2>我是首页</h2>
  <p>hahahahah</p>
  <router-link to="/home/news">新闻</router-link>
  <router-link to="/home/message">消息</router-link>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return{

    }
  },
  created(){
    console.log("home created");
    //document.title="首页"
  },
  destroyed() {
    console.log("home destroyed")
  },
  //activated 和 deactivated记录活跃/不活跃状态，只有该组件被保持了状态使用了 <keep-alive> 时，才是有效的
  activated() {
    this.$router.push(this.path)
  },
  // deactivated() {
  //   console.log("deactivated")
  // }
  //组件内导航守卫
  beforeRouteLeave(to,from,next){
    console.log(this.$route.path)
    this.path=this.$route.path
    next()
  }
}
</script>

<style scoped>

</style>
