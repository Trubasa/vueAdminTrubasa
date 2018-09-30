<template>
  <div class="window-resize">

  </div>
</template>

<script>
  export default {
    name: "window-resize",
    data() {
      return {
        timer:null, //定时器
        window:window,
      }
    },
    mounted(){
      var that=this;
      that.resize();
      window.onresize=function(){
        that.$bus.$emit('resize')
        that.resize()
      }

    },
    beforeDestroy(){

    },
    methods:{
      resize(){

        var that=this;
        //改变窗口尺寸后，只有在停止变化后300ms才会进行store参数的设置
        clearTimeout(this.timer);
        this.timer=setTimeout(function () {
          that.setWindow()
        },300)

      },
      setWindow(){
        this.$store.commit('changeWindowObj',{
          width:window.innerWidth,
          height:window.innerHeight
        })


        var screenType=window.innerWidth<720?'mobile':'pc';


        this.$store.commit('changeScreenType',screenType)
      }
    }
  }
</script>

<style scoped>

</style>
