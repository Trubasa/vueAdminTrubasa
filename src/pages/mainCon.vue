<template>
  <div class="main-con">
    <div class="left_menu">
      <left-menu></left-menu>
    </div>
    <div class="center">
      <div style="width: 200px;height: 200px;cursor: pointer;" class="mdui-ripple"> hello mdui</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "main-con",
    data() {
      return {}
    },
    mounted() {

    },
    methods: {}
  }
</script>

<style scoped>
  .main-con{
    padding-left: 200px;
  }
.left_menu{
  width: 200px;
  background-color: #545c64;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
}
</style>
