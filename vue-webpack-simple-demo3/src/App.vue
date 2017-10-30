<template>
  <div id="app">
    <mt-header fixed title="固定在顶部"></mt-header>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">选项一</mt-tab-item>
      <mt-tab-item id="2">选项二</mt-tab-item>
      <mt-tab-item id="3">选项三</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-spinner type="snake"></mt-spinner>
        <mt-spinner type="double-bounce"></mt-spinner>
        <mt-spinner type="triple-bounce"></mt-spinner>
        <mt-spinner type="fading-circle"></mt-spinner>

        <!-- 或者接受传入类型的序号 -->
        <mt-spinner :type="0"></mt-spinner>
        <mt-spinner :type="1"></mt-spinner>
        <mt-spinner :type="2"></mt-spinner>
        <mt-spinner :type="3"></mt-spinner>

      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <Loading></Loading>
      </mt-tab-container-item>

      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="外卖">
        <img slot="icon" src="../src/assets/logo.png">
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="../src/assets/logo.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="../src/assets/logo.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../src/assets/logo.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                selected:true
            }
        },
        methods:{
            change(){
                this.msg = "这是点击后的数据";
            }
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