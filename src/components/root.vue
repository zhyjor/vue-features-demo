<template>
  <div>
    <div class="wrapper">
      我是根组件
    </div>
    <tem-a></tem-a>
    <tem-b></tem-b>
  </div>
</template>

<script>
  import temA from './temA.vue'
  import temB from './temB.vue'

  export default {
    name: 'root',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      temA,
      temB
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" rel="stylesheet/css">
  .wrapper{
    font-size: 40px;
  }

</style>
