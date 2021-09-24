<template>
<div>
  <h2>我是关于</h2>
  <p>hehehhe</p>
</div>
</template>

<script>
export default {
  name: "About",
  data(){
    return{

    }
  },
  created(){
    console.log("created");
    document.title="关于"
  }
}
</script>

<style scoped>

</style>
