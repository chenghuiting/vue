<template>
<div>
  <h2>我是用户界面</h2>
  <p>用户界面内容用户界面内容用户界面内容</p>
  <h2>{{userId}}</h2>
  <h2>{{$route.params.abc}}</h2>
</div>
</template>

<script>
export default {
  name: "User",
  computed:{
    userId(){
      return this.$route.params.abc
    }
  }
}
</script>

<style scoped>

</style>
