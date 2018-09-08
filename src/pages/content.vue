<template>
  <div class="mainCon">
    欢迎使用 tru-admin system
  </div>
</template>

<script>
  export default {
    name: "mainCon",
    data() {
      return {}
    },
    mounted() {
      this.$netWork.get('/server')
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    methods: {}
  }
</script>

<style scoped>

</style>
