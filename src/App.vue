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
    mounted() {

    },
    methods: {}
  }
</script>

<style>


</style>
