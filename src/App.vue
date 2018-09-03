<template>
  <div id="app">
    <window-resize></window-resize>
    <transition name="fade">
    <router-view/>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted(){

    },
    methods:{

    }
  }
</script>

<style>
  .fade-enter-active{
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
