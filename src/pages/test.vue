<template>
  <div>
    <tru-load-more>
      hello
    </tru-load-more>
  </div>
</template>

<script>
  export default {
    name: "test",
    data () {
      return {
        num: 10,
        refreshing: false,
        loading: false,
        text: 'List'
      }
    },
    methods: {
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
<style >
  .demo-loadmore-wrap {
    width: 100%;
    max-width: 360px;
    height: 420px;
    display: flex;
    flex-direction: column;

  }
  .demo-loadmore-wrap .mu-appbar {
    width: 100%;
  }
  .demo-loadmore-content {
    flex: 1;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
</style>

