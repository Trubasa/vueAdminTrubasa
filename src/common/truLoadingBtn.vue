<template>
  <div class="tru-loading-btn">
    <mu-button v-loading="loading" full-width :disabled="loading" data-mu-loading-size="24" :color="color" @click="click">
      <slot></slot>
    </mu-button>
  </div>
</template>

<script>
  export default {
    name: "tru-loading-btn",
    props:['color'],
    data() {
      return {
        loading:false,
        timer:null
      }
    },
    mounted() {

    },
    methods: {
      click(){
        console.log('click');
        this.$emit('tru-click');
        this.loading=true;
        clearTimeout(this.timer);
        this.timer=setTimeout(()=>{
            this.loading=false
        },productConfig.timeout||3000)

      }
    }
  }
</script>

<style scoped>
.tru-loading-btn{
  display: inline-block;
  box-sizing: border-box;
}

</style>
<style>
  .tru-loading-btn .mu-loading-wrap{
    background: none !important;
  }
  .tru-loading-btn .mu-button {
    margin: 0 2px
  }
</style>
