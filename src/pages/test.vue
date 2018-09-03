<template>
  <div class="test">
    test
    <tru-image :src="url"></tru-image>
  </div>
</template>

<script>
  export default {
    name: "test",
    data() {
      return {
        url:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2338693105,1140444294&fm=58&bpow=512&bpoh=512"

      }
    },
    mounted() {
      setTimeout(()=>{
        this.url='http://attach.zhiyoo.com/forum/201303/30/16392363kvt13er39xk1k3.jpg'
      },2000)
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
