<template>
  <div class="tru-load-more">
    <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
      <slot></slot>
    </mu-load-more>
  </div>
</template>

<script>
  export default {
    name: "tru-load-more",
    data () {
      return {
        num: 10,
        refreshing: false,
        loading: false,
        text: 'List'
      }
    },
    methods:{
      refresh () {
        this.refreshing = true;
        this.$refs.container.scrollTop = 0;
        setTimeout(() => {
          this.refreshing = false;
          this.text = this.text === 'List' ? 'Menu' : 'List';
          this.num = 10;
        }, 2000)
      },
      load () {
        console.log('loading');
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.num += 10;
        }, 2000)
      }
    }

  }
</script>

<style scoped>

</style>
