<template>
  <div class="tru-content " > <!--左侧 菜单-->
    <transition name="left">
    <div class="left_menu tru_transition" :style="{width:menuWidth+'px'}" v-if="screenType=='pc'">
      <left-menu :is-collapse="isCollapse"></left-menu>
    </div>
    </transition>

    <tru-popup-panel type="left" :isShow="menuShow" @close="menuShow=false">
      <div class="left_menu tru_transition" :style="{width:menuWidth+'px'}">
        <left-menu :is-collapse="isCollapse"></left-menu>
      </div>

    </tru-popup-panel>
    <!--右侧 内容-->
    <div class="main_con tru_transition" :style="{paddingLeft:(screenType=='pc')?(menuWidth+'px'):0}"> <!--如果是手机尺寸则padding-left为0-->
      <!--系统标题栏-->
      <mu-appbar style="width: 100%;" :color="$scheme.bgColor">
        <mu-button icon slot="left"  @click="toggleMenu">
          <mu-icon value="menu"></mu-icon>
        </mu-button>
        Title
        <mu-button flat slot="right">LOGIN</mu-button>
      </mu-appbar>

    </div>
  </div>
</template>

<script>
  export default {
    name: "tru-content",
    data() {
      return {
        isCollapse:true,
        menuShow:false,
      }
    },
    computed:{
      menuWidth(val){
        return this.isCollapse?65:200
      },
      screenType(){
        return this.$store.state.screenType;
      }
    },
    watch:{
      screenType(val){
        if(val=='mobile'){
          this.isCollapse=false;  //手机尺寸下，菜单不是迷你
        }

      }
    },
    mounted() {

    },
    methods: {
      toggleMenu(){
        console.log('toggleMenu');
        if(this.screenType=='mobile'){
          this.menuShow=!this.menuShow;
        }else{
          this.isCollapse=!this.isCollapse
        }
      }
    }
  }
</script>

<style scoped>
  .tru-content{

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
