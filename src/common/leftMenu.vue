<template>
  <div class="left-menu">
    <el-menu default-active="1-4-1"
             class="el-menu-vertical-demo"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b"
             @open="handleOpen"
             @close="handleClose"
             :collapse="isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title" class="mdui-ripple">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title" class="mdui-ripple">分组一</span>
          <el-menu-item index="1-1" class="mdui-ripple">选项2</el-menu-item>
          <el-menu-item index="1-2" class="mdui-ripple">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "left-menu",
    data() {
      return {
        isCollapse: true //是否折叠
      }
    },
    mounted() {

    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
.left-menu{
  overflow: hidden;
}

</style>
<style>
  /*.el-menu {
    border-right: solid 1px #393d49;
  }*/
</style>
