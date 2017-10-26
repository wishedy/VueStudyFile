<template>
  <div id="app">
    <div>{{msg}}</div>
    <News></News>
  </div>
</template>

<script>
  import News from './components/News.vue'

  export default {
    name: 'app',
    data () {
      return {
        'msg': 'webpack-vue-demo'
      }
    },
    components: {
      News: News
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
