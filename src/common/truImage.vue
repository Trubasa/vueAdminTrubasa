<template>
  <!--mode:'bg' 背景模式-->
  <div ref="imageBox" class="image_box">
    <img style="display: none;" :src="src" alt="" @load="imgLoad">
    <transition name="el-fade-in">
      <div v-if="imgObj"
           :class="['image',sizeType]"
           :style="{backgroundImage:'url('+src+')'}"></div>
    </transition>
    <div v-if="!imgObj" class="loader tru_center">
      <!--转圈-->
      <!--<svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
        <path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z" transform="rotate(275.911 25 25)">
          <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"></animateTransform>
        </path>
      </svg>-->
      <!--条状-->
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
        <rect x="0" y="8.67319" width="4" height="12.6536" fill="#333" opacity="0.2">
          <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
          <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
          <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
        </rect>
        <rect x="8" y="6.17319" width="4" height="17.6536" fill="#333" opacity="0.2">
          <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>
          <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>
          <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>
        </rect>
        <rect x="16" y="6.32681" width="4" height="17.3464" fill="#333" opacity="0.2">
          <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>
          <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>
          <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>
        </rect>
      </svg>

    </div>
  </div>

</template>

<script>
  export default {
    name: "tru-image",
    props: ['src', 'mode'],
    data() {
      return {
        imgObj: null,
        imgBoxObj: null,
        sizeType: 'bg_width'
      }
    },
    watch:{
      src(val){
        this.imgObj=null;
      }
    },
    beforeMount() {
      this.$bus.$on('resize', this.judgeSize)
    },
    beforeDestroy() {
      this.$bus.$off('resize', this.judgeSize)
    },
    mounted() {

    },
    methods: {
      imgLoad(ele) {
        console.log(ele.path[0]);
        this.imgObj = ele.path[0];
        console.log(this.imgObj.width, this.imgObj.height);
        this.imgBoxObj = this.$refs.imageBox
        console.log(this.imgBoxObj);
        this.judgeSize();
      },
      judgeSize() {
        console.log('judgeSize');
        var imgObj = this.imgObj;
        var imgBoxObj = this.imgBoxObj;
        if (!(imgBoxObj && imgObj)) {
          return;
        }
        if (imgObj.width / imgObj.height - imgBoxObj.clientWidth / imgBoxObj.clientHeight < 0) {
          this.sizeType = 'bg_width'
        } else {
          this.sizeType = 'bg_height'
        }

      }
    }
  }
</script>

<style scoped>
  .image_box {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

  }

  .image {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-position: center center;
    background-repeat: no-repeat;
  }

  .bg_width { /*背景图片 宽度占满*/
    -webkit-background-size: 100% auto;
    background-size: 100% auto;
  }

  .bg_height { /*背景图片 高度占满*/
    -webkit-background-size: auto 100%;
    background-size: auto 100%;
  }
  .loader{
    zoom: 2;
  }

</style>
