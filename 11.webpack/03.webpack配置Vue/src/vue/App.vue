<template>
  <div>
    {{ message }}
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: "Hello Webpack"
    }
  },
  methods: {
    btnClick() {
      alert("haihia")
    }
  }
}
</script>

<style scoped>

</style>