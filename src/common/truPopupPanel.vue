<template>
  <transition name="no">
    <div class="tru-popup-panel" v-show="isShow">
      <transition name="left">
        <div :class="['popup_panel',type+'_panel','mdui-shadow-6']" v-if="isShow">
          <slot></slot>
        </div>
      </transition>
      <transition name="fade">
        <div class="shadow tru_transition" @click="close" v-if="isShow"></div>
      </transition>
    </div>
  </transition>

</template>

<script>
  export default {
    name: "tru-popup-panel",
    props: ['type', 'isShow'],
    data() {
      return {}
    },
    mounted() {

    },
    methods: {
      close() {
        this.$emit('close')
      }
    }
  }
</script>

<style scoped>

  .tru-popup-panel {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
  }

  .popup_panel {
    background-color: #fff;
    position: absolute;
    z-index: 20;
  }

  .left_panel {
    top: 0;
    bottom: 0;
    left: 0;

  }

  .shadow {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
</style>
