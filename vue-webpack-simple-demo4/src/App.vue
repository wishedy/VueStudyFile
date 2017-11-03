<template>
  <div id="app">
    <h3>
      welcome vue-x
    </h3>
    <button @click="addData">增加</button>
    <button @click="deData">减少</button>
    <button @click="oddData">偶数</button>
    <button @click="evenData">奇数</button>
    <div>现在数字为{{count}}这是个{{isOdd}}</div>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from "vuex"
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
    computed:mapGetters([
        "count","isOdd"
    ]),
    methods: mapActions(["addData","deData","oddData","evenData"])
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
