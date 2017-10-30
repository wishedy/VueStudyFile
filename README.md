# Vue学习笔记
关于Vue的一些自学笔记，视频教程参考智能社Vue教程
## 第一课 了解Vue
- Vue是一个mvvm框架和angular类似，容易上手，小巧。目前常见的模式，mvc,mvp，mvvm。
- [Vue官网](https://cn.vuejs.org/)
- Vue和angular的区别：
  - Vue简单易学，官网全是中文，指令v-XXX，一片html配置一个json，通过new实例化。vue是个人维护的。适合移动端项目。vue发展势头猛，可以通过github上的start数对比出。
  - angular官网全是英文，需要翻墙，上手较难，指令ng-XXX，所有的属性挂载到$scope,angular是由谷歌维护的。也适合移动端项目，但是更适合PC端项目。
  - 共同点，不兼容低版本的ie,ie8及ie8一下不做考虑
- 001.html vue基本雏形

- 002.html vue基本基本指令
    - 指令其实是标签功能的扩展
    - v-model常用在表单元素input中
- 003.html vue data中存储数据
    - string Number 布尔值 arr均可以存储数据，并且展示到html中
    - json数据直接在标签中渲染显示object
- 004关于vue的循环
    - v-repeat在vue中会报错，目前从1.0.21开始废掉
    - v-for是目前vue中循环的指令
    - {{$index}}是vue在循环中配置的数据索引值
- 005关于vue的循环json
  - item循环的是json每一个key下的vaule值，同样$index可以提供一个索引值
  - $key提供了json数据的key值
- 006vue基础事件
  - 事件形式 v-on:事件名="fun()" fun这些函数统一写在vue对象中的methods里面。在vue所有方法中所有的this指的是最初new出来的vue对象
  - 常见的时间 click mousedown mouseover dblclick双击等等，具体可参见官网
- 007 控制元素显示隐藏
  - 元素显示v-show ``<div v-show='true'></div>``里面放的是一个布尔值
- 008 一个可以增删的留言板，综合以上只是的一个demo（todolist）,bootstrap+vue
    - modal，bootstrap模态框,对模态框做一个简单的了解
      - 模态框就是在点击一个按钮的时候调用一个弹层 例如``<button data-toggle='modal' data-target='#layer'></button>``意思是点击这个按钮的时候去调用模态框，模态框的id是layer,
      - 再比如``<button data-miss='modal'></button>``点击这个按钮的时候模态框消失
```html
<div role="dialog" class="modal fadeIn" id="layer">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button class="close" type="button" data-dismiss="modal"><span>&times;</span></button>
                    <h4 class="modal-title">确认删除吗？</h4>
                </div>
                <div class="modal-body text-right">
                    <button class="btn btn-primary btn-sm" data-dismiss="modal">确认</button>
                    <button class="btn btn-danger  btn-sm" data-dismiss="modal">取消</button>
                </div>
            </div>
        </div>
    </div>
```
- todolist的实现 具体参见008.html
## 第二课 事件深入
- 009.html
  - 事件全写 v-on:事件="fun()" 事件简写 @事件="func()";
- 010.html 事件对象$event
  - 事件冒泡的阻止方法
    - 阻止冒泡在调用函数的时候 @click="func($event)"；在具体的函数代码块里面 ev.cancelBubble = true;
    - @click.stop="func()"；vue提供的组织冒泡的方法
  - 默认事件 比如鼠标右键 @contextmenu="func()";
    - func($event) e.preventDefault();
    - @contextmenu.prevent="func()";vue提供的组织默认事件的方法
- 011.html键盘事件
   - 获取键盘值的方法  @keydown="func($event)"; e.keyCode;keydown和keyup的区别，up的时候文字已经进入input内了，down的是时候没有
   - 键盘上用键，回车，上下左右。如果不想通过获取键值然后再进行判断去执行相应的操作，可以通过 @keydown.num = "func()"；num就是那个你想触发的键的键码。
   - 还有一种方式也是vue提供的 比如回车键 @keydown.enter = "func()";同理up,left,right,down等等,都可用
- 012.html属性
  - 属性 在元素里面如果直接引用属性 需要a= "{{数据名}}"；
  - 如果不想用花括号 v-bind:a="数据名" vue推荐使用，v-bind:a="数据名";简写:a="数据名";
- 013.html class  style属性说明
   - class
     - :class  = [a,b,c,d];数组里面有几个数据就有几个class，改变数组就是改变class,abcd代表的是变量。数组可以全部当做一条数据被处理。
     - :class={red:true,blue:false}，这时候元素的class是class="red"，json的key值因后面的布尔值生效了。true false可以跟data里面的数据变量。json可以当做一条数据被处理。
  - style
     - :style=[a,b,c,d] 数组中的元素必须是一个json键值对，比如[{color:"#fff""},{fontSize:"20px"}]，
     - 官方推荐使用json格式的数据
- 014.html模板渲染
   - 模板 {{数据}}  数据更新 模板也变化，如果数据是一次性展示不需要更新如何实现。{{*数据}}代表只绑定一次。
   - 字符串中带有html标签如何转义后渲染,{{{数据}}}使用三个大括号实现,在2.0中这种形式已经被取消了，直接使用v-html渲染。
- 015.html 过滤器
   - 过滤器 使用方法 {{数据|过滤器}}
   - vue提供了常用的过滤器 uppercase 将小写转换为大写
   - lowercase大写转小写，首字母大写 capitalize
   - currency 将数字转化为带金钱符号的数字 直接使用默认转换为 $num，如果想改变生成的符号，可以在过滤去后面传参，比如说{{12|currency "￥"}}就会生成人民币
   - 多个过滤器的使用 {{数据|过滤器1|过滤器2|...}}
- 016.html ajax交互
  -  vue本身不支持ajax 如果想要使用这个功能需要引入vue-resource.js文件。
  -  > 使用方法 ````this.$http.get("../data/list.json").then(function(res){
                       console.log(res.data);
                    },function(){
                        console.log("失败函数")
                    });````
  -  > 发送数据````this.$http.get("../data/list.json"，{这里是发送的服务器的数据}).then(function(res){
                       console.log(res.data);
                    },function(){
                        console.log("失败函数")
                    });````
  - post同理
  -  > 发送数据````this.$http.get("../data/list.json"，{emulateJson:true}).then(function(res){
                       console.log(res.data);
                    },function(){
                        console.log("失败函数")
                    });````
   - >通用方式 ````this.$http({url:"请求地址",data:"向后台提交的数据",method:"GET/POST",jsonp:"如果是跨域请求需要写上回调函数的名字"})。then(function(res){//成功的回调},function(){//失败的回调})````
   - jsonp
   - > 要求````this.$http.jsonp("https://www.baidu.com/s?ie=utf-8&mod=11&isbd=1&isid=3E7BC5C518D57157&ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu",{
                        wd:"a"
                    },{
                        jsonp:"cb"//jsonp是依靠回调函数来执行异步请求的，vue提供的回调函数默认名是callBack,例如好搜的回调就是callBakc，所以不用做特殊处理，但是其他接口的回调命名未必叫callBack，例如百度叫cb,因此需要自己定义，其余方式不变
                    })````

   - >通过好搜实现跨域````this.$http.jsonp("https://sug.so.360.cn/suggest",{
                        word:"a"
                    }).then(function(res){
                            console.log(res.data);
                    });````
- 017.html 利用跨域实现一个实时搜素数据的请求
  - 跨域
## 第三课 Vue生存周期
- 018.html vue生存周期
  - new Vue,是一个创建实例的标志，vue提供了一些函数，在vue实例化过程中供调用，命名为钩子函数，这些函数级别平行于methods,
    - created：实例创建完；
    - beforeCompile：实例编译前；
    - compiled：实例编译完；
    - ready：数据渲染完：dom元素已经插入；
    - beforeDestroy:在实例销毁之前;
    - destroyed:实例销毁后;
  - 如何销毁一个vue对象，c.$destroy()；c代表new出来的vue对象，实例被销毁，原有的已经渲染的界面不会消失，只是代表之后的vue对象下的内容不能再被使用；。
  - 一般情况下页面加载完，请求数据的业务需求是在ready里面执行.
 - 019.html 当数据渲染比较慢的时候，用户有可能会看到花括号的标记，这种体验并不友好。如何改善？
    - 给元素一个v-cloak属性，在样式表中[cloak]{display:none;}
    - ``<p v-text="msg"></p>``局部渲染标签内的数据，v-text主要是渲染普通的字符串,如果字符串带有标签，会原原本本被渲染出来。
    - 如果字符串带有标签且希望标签被渲染出来可以使用v-html
 - 020.html如何监听一个数据，当监听到一些情况后，去改变另一个数据？
   - 使用计算属性computed，实现数据的相关联
   - 计算属性下面的值，本质也是一个对象，完成数据的处理，分为两个方法，首先是get,然后是set
     - get是在给这个计算属性相关联的数据做操作时候会触发的函数,
     - set是在给这个计算属性赋值的时候会触发的函数
- 021.html vue实例的一下相关方法
  - vue对象.$el;这个就是指vue绑定的元素，c.$el.style.background ="red";
  - v.$data，就是实例原本的数据对象
  - c.$mount("#box");手动挂载元素
  - c.$options 传给vue对象的配置，data、methods、等等,在传向vue时可以自己定义属性或者方法，使用的话就是c.$options.属性/方法;
  - c.$log();主要用来查看data里数据的状态
- 022.html 针对重复的数据循环
  - 在数组中vue默认重复数据不允许添加，如何解决？
  - 直接在训话元素中添加track-by ````<li v-for="item in arr" track-by='$index'>{{item}}</li>```` track-by 后跟一个该条数据的唯一标识，例如$index
- 023.html 过滤器了解
  - debounce 延时 配合事件，最合适的是键盘事件 ````<input type='text' @keydown='show|debounce num'>````num为希望延时的时长，ms为单位 2000 代表2秒
  - 针对数据的操作，limitBy 限制几个数据``<li v-for="item in arr|limitBy 2 1">{{item}}</li>``limitBy 第一个参数代表取几个参数，第二个代表从哪儿开始，2，1，代表从1开始取两个数据，从0开始算
  - ["width","height","background","orange"],只取出包含字母o的数据？
  - ``<li v-for="item in list|filterBy 'o'">{{item}}</li>``方便使用input进行实时检索数据，并展示出来
  - orderBy 对数据进行排序``<li v-for="item in arr|orderBy 1">{{item}}</li>``正序排列，-1代表倒叙排
- 024.html 自定义过滤器
   - > Vue.filter("name",function(v,v1,v2){
            //name，为自定义过滤器的名字，v为默认最初传入的数据，v1,v2是需求看是否需要传入，自定义过滤器必须在vue实例化前注册
        });
 - 025.html双向过滤器
   - 双向过滤器
## 第四课 自定义指令
- 026.html自定义指令
  - > Vue.directive("name",function(){
            //name是自定义指令的名字，在标签中调用的时候形式是v-name
        });
  - 在调用的时候 v-name="a",可以当做自定义之类function的参数传入
 - 027.html自定义元素
   - > Vue.elementDirective("zn-red",{
                bind:function(){
                  this.el.style.background = "red";
                }
            });
- 028.html 自定义键盘信息
  - >``<input type="text" @keydown.ctrl="show()"> Vue.directive("on").keyCodes.ctrl = 17;``
- 029.html 监听数据变化
  - $watch v.$watch("name",function(){});name代表监听数据的名字，当数据变化的时候 会触发后续的fun，单独监听一个字符串 之类的一层数据为浅度监听
  - {{jsonData|json}}，json过滤器，将json数据字符串化
  - 深度监听 v.$watch("name",function(){},{deep:true})
## 第五课 组件化
 - 030.html vue过度 动画
   - bower 下载 bower install 包名
   - bower 卸载 bower uninstall 包名
   - 通过bower 看一个插件或框架的版本号 指令，bower info 包名
   - 通过bower 下载制定版本的库 bower install 包名#版本号
   - bower下载时可以自动查找其依赖
   - 动画的本质是使用css3效果，通过标签内的transition实现
   - 基本动画的步骤，首先元素有一个transition的属性，transition="名称";
   - 其次编写css  名称-transition{transition：1s all ease;//意思是规定动画时长} 名称-enter{//动画入场效果} 名字-leave{//动画出场效果}
  - 031.html结合aminate.css实现动画
    - > 引入animate.css 同样在标签内给 transition一个名称,vue独立的提供了一个transition的钩子，在这个对象中可以{"name":{"enterClass":"这是入场动画，具体引用参见animate.css","leaveClass":"这是出厂动画，具体引用参见animate.css",}}
- 032.html 组件化
  - 组件本质是一个大对象
  - 定义一个组件的方式
    - 全局组件``var Aaa = Vue.extend({
                template:"<h1>这是一个标题</h1>"
            });//一个实例化的对象
            Vue.component("aa",Aaa);先实例化一个对象，也就是组件，然后将这个组件命名，命名过的aa就可以在Vue实例化后被当做<aa></aa>标签使用``
    - 组件里面放数据，组件里面放数据的时候，data必须是函数的形式``var Aaa = Vue.extend({
                template:"<h1>{{msg}}</h1>",data:function(){return {msg:"这是一个组价数据"}}
            });``
    - 在组建中其余的methods 等按原来形式写
    - 局部组件 直接引用在vue实例化对象的components对象中。
- 033.html 组件深入
  - template中的模板可以放在script标签中，此时在template中将script的id引入，还有一种直接把模板写在template标签中，这种和写在script标签中类同，但是比较方便的是，有代码提示
- 034.html 动态组件
  -  动态组件必须渲染成component标签
  -  <component :is="组件名"></component>
- 035.html 父子组件之间的通信
  - 子组件获取父组件的data,使用props
  - 在父组件的组件中，给子组件添加属性例如父组件的模板是``<h1><aaa :name:"msg"></aaa></h1>`` msg为父组件数据，此时传递给name，子组件要想获得数据，需要初始化props:{name:""}//初始化的形式根据原始传递数据的形式初始化，这个name一定要和父组件标签中的属性名一致，这样子组件就可以顺利使用到父组件的msg数据了,
  - ！注意 标签中如果name  为 a-b的模式，在props中必须采用驼峰形式
  - 在对组件命名的时候尽量使用小写英文
- 036.html 父组件获取子组件的数据
  -  子组件向父组件发送数据 在子组件里面使用this.$emit("child-msg",data)；child-msg为发送给父组件的数据名称，data为本组件的数据名称，父组件通过v-on指令接收数据，指令名称 v-on:child-msg，简写@name,此时父组件需要一个函数来收取这个数据，函数默认会接收一个参数fun(d)；这个参数就是子组件的数据;child-msg必须是这个形式，不能使用其他名字
  -  v.$dispatch("事件名",数据);子组件向父组件发送数据
  -  v.$broadcast("事件名",数据);父组件向子组件广播数据
  -  以上两种方式在vue2.0中已经报废
- 037.html slot 槽口、位置
  - slot主要用来余留默认的静态元素例如```<aaa><ul></ul></aaa> ```
  - 多个slot如何余留 ``<slot name="a-slot"></slot>在需要余留的元素中写上<元素 slot="a-slot"></元素>``
## 第六课 vue路由 spa单页面应用
- 路由 根据不同的url处理不同得页面
- 038.html路由基本了解
  - vue 在a标签中提供了一个v-link属性 v-link="{path:"/home"}"；path即跳转 路径
  - 路由内容的展示通过router-view标签实现
  - 分为四步
    1. 首先需要准备一个根组件
    2. 准备跳转组件
    3. 准备路由
    4. 路由关联
    5. 启动路由
- 039.html 路由初始化跳转
- 040.html 路由初始化跳转
- 041.html 多层路由即路由的嵌套 subRouter
- 042.html 路由信息的传递 通过 "/a/:name" 在路由模板元素中{{$route.params|json}}可以将参数读出，根据参数做具体的操作{{$route.path}}展示路由路径，同样链接后面也可以缀query参数，通过{{$route.query|json}}可以展示出来
## 第七课  Vue-loader
- webpack 前端模块加载器
- 最早提供前端模块化的是broserify：但是只能加载js
- nodeJs  后端模块加载器
- Vue-loader基于webpack .vue 方式的是vue组件相关代码``html放在template标签里，css放在style标签里，js放在script标签里``
    - loader文件夹，手动搭建webpack,了解webpack大致原理
    - index.html，最后所有的代码均渲染到此文件中,
    - main.js，编写webpack代码的入口文件，官方推荐,
    - App.vue,组件第一个字母大写是官方推荐
    - package.json工程文件，npm init --yes 可以自动生成
    - webpack.config.js，webpack的配置文件
    - webpack的准备工作 npm install webpack webpack-dev-server,网速慢的话可以使用cnpm
    - App.vue要编程正常的代码，需要使用vue-loader，npm install vue-loader@8.5.4 --save-dev  通过--save-dev 命令下载的模块都会在 package.json里面的devDependencies查找到
    - 针对html css  js的解析分别需要安装 vue-html-loader css-loader vue-style-loader  vue-hot-reload-api@1.3.2
    - es6转es5需要使用babel,因此需要下载 babel-loader babel-core babel-plugin-transform-runtime babel-preset-es2015 babel-runtime
    - 最最核心的模块当然是vue
- vue-router 配合vue-loader使用
- 上线前 执行 webpcak -p 打包压缩，压缩后的文件就可以上线了
- vue-cli vue脚手架，脚手架就是帮你提供好了基本项目结构的
  - v-clk本身集成了很多项目模板，webpack webpack-simple  broswerify broswerify-simple simple
  - 基本使用步骤
    - npm install vue-cli -g 安装vue命令环境，如何验证已经安装完成
    - vue --version如果出现版本号说明已经安装好了
    - vue init 模板名称 本地文件夹名称
    - 常见的模板名称 webpack webpack-simple  broswerify broswerify-simple simple，本地文件夹名称是自己定义的名字
    - 进入到生成的目录里面cnpm install
    - npm run dev webpack 模板包含Eslint代码的检查、单元测试

# 第八课 Vue2.0变化
- 043.html 进入2.0后的变化
  1.  在每段组件的模板中不再支持片段模板，组件的命名最好是有小写。
1.  组件模板之前的写法
```
<html>
<!--在这里插入内容-->
    <template>
        <h3>我是一个组件</h3><strong>我是组件片段</strong>
    </template>
</html>
```
2. 现在必须有根元素包裹
```
<html>
    <!--在这里插入内容-->
    <template>
        <div>
            <h3>我是一个组件</h3><strong>我是组件片段</strong>
        </div>
        <!--现在是所有的模板元素必须包裹在一个根元素里面-->
    </template>
</html>
```
  3.

```

Vue.component({
    template:"",
    data(){},
    methods:{}
});
<!--这种方式在2.0中可以继续使用-->

```
 4. 2.0推出了简介的组件定义方式

```
var Home = {
    template:""
}
Vue.component("my-aaa",Home);
<my-aaa></my-aaa>
```
- 044.html 2.0比较大的变化是实例的声明周期
   - beforeCreate 组件刚刚被创建,属性还没有
   - created 实例已经创建完成，属性已经绑定，但是dom还没有生成
   - beforeMount 模板编译之前
   - mounted 模板已经编译完成,相当于之前的ready
   - beforeUpdate 组件在更新之前
   - updated 组件更新之后
   - beforeDestroy:在实例销毁之前;
   - destroyed:实例销毁后;
 - 045.html 2.0循环
   - 在1.0中添加重复的数据是不被直接允许的，如果要想添加 必须使用track-by属性
   - 在2.0里面默认可以添加重复的数据
   - 在2.0里面去掉了一些隐式的变量

```
<!--例如之前的$index-->
<ul>
    <li v-for="item in list">{{item}}{{$index}}</li>
</ul>
    或者是 <li v-for="(index,value) in list">{{index}}{{value}}</li>
<ul>
        <li v-for="item in json">{{item}}{{$key}}</li>
</ul>

```
```
<!--现在的使用方法-->
<ul>
    <li v-for="(vaule,index) in list">{{value}}{{index}}</li>
</ul>
<!--这种形式$key会警告说$key已经被取消了-->
<ul>
        <li v-for="item in json">{{item}}{{$key}}</li>
</ul>
<ul>
        <li v-for="(vaule,key) in json">{{vaule}}{{key}}</li>
</ul>

```
- 046.html 2.0自定义键盘事件的改变

```
<!--之前的键盘事件，以keyup为例-->
<input type="text" @keyup.num="func()">//通过键盘值来触发事件，不能全部覆盖
<input type="text" @keyup.enter="func()">//通过键盘键名来触发事件，不能全部覆盖
-----------------------------
Vue.directive("on").keyCodes.name=num num;//name是你想起的键盘名，当然可以和原来的键盘名相同，也可以自己命名，num是这个键盘最后的值。
<input type="text" @keyup.name="func()">//通过自己定义键盘键名来触发事件，能全部覆盖
```

```
<!--以上diretive的方法在2.0中会报错，现在的键盘事件-->
Vue.config.keyCodes.name=num;
<input type="text" @keyup.name="func()">
```
- 在2.0中作者把所有的内置过滤器删除了，在2.0中json数据可以直接以字符串形式渲染到dom中
- 047.html自定义过滤器，仍然可以按照以前的方式，但是自定义过滤器传参要求有变化。
以前的传参方式``{{data|filter a b}}``,现在``{{data|filter(a,b)}}``
- 048.html组件之间的通信
  - 子组件通过props获取父组件的的信息，如果想要同步数据 ：name.sync就可以了，但是在2.0这种方式不被允许。
  - 如何实现更改同步，父组件每次传一个对象给子组件
- 049.html 使用单一事件管理组件通信
  - 父组件 详细参见代码
## 第九课 动画、路由深入
- 050.html 动画深入 之前动画是以transition属性的方式出现的，现在是一个组件

```
<style>
        //样式命名参考顺序
        .demo{
        }
        .fade-enter-active,.fade-leave-active{
            transition: 1s all ease;
        }
        .fade-enter-active{
        }
        .fade-leave-active{
        }
        .fade-enter,.fade-leave{
        }
</style>
<transition name="名称">
//class:名称-enter初始状态
//名称-enter-active动画激活时候的状态
//名称-leave、
//名称-leave-active
</transition>
```
- 051.html 结合animate.css

```
vue2.0已经失效
 transitions:{
                enterActiveClass:"zoomInLeft",
                leaveActiveClass:"zoomOutRight",
            }
```
- 052.html，053.html 多个元素运动
- 多元素运动的关键是运用元素的key属性
## 第十课 路由深入
- 054.html 路由的深入
- 可以[参考官网路由讲解](https://router.vuejs.org/zh-cn/)
- 2.0基本使用步骤
- 布局配置

```
<router-link to="/home">主页</router-link>
    <router-link to="/news">新闻</router-link>
    <router-view></router-view>
```
- 配置组件

```
var Home = {
            "template":"#home"
        };
        var News = {
            "template":"#news"
        };
```
- 配置路由

```
var routes = [
            {path:"/home","component":Home},
            {path:"/news","component":News},
            {path:"*",redirect:"/home"}//重定向
            {path:"/news",redirect:Home}//访问news的时候想定向到home
        ];
```
- 实例化路由

```
var router = new VueRouter({
            routes
        });
```
- 实例化vue对象路由开始

```
var c = new Vue({
            "el":"#box",
            data:{
                msg:"welcome-vue-router"
            },
            router,
        });
```
- 055.html嵌套路由 以及路由结合动画，子路由详细内容参考文件
# 第十一课 element-ui
- element-ui,提供好的UI，主要是为了提升开发效率，原则就是拿来直接使用
- bootstrap 简介、大方,基于jquery,核心应用栅格化系统、响应工具
- vue-webpack-simple-demo3,关于element-ui的讲解
- bootstrap是由Twitter开源
- element ui（主要针对PC端） mint-ui（主要针对移动端）都是是由饿了么团队开源
- 常用的引用方式直接在html文件中引入link标签即可，组件化的css如何引用?
- element-ui详细说明请[参考官网](http://element.eleme.io/)(中国开发)
- 关于element-ui的使用
   - 安装 npm i element-ui -D//i install 简写 D --save-dev简写 S save简写
   - 引入

```
import ElementUi from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
```
- 使用 这时候页面会报错，原因是因为webpack配置缺少css-loader，已经字体图标file-loader，

```
//css-loader配置
{
    test: /\.css$/,
    loader: 'style-loader!css-loader'
},
//sass-loader 这时候在.vue的style标签中需要 加上lang=scss属性
{
    test: /\.sass$/,
    loader: 'style-loader!css-loader!sass-loader'
},
//file-loader
{
    test: /\.(eot|svg|ttf|woff|woff2)$/,
    loader: 'file-loader'
},
```
- 按需加载相应组件
  - 首先需要引入 babel-plugin-component 官方推荐使用
  - 然后修改配置文件，在barbel.src新增配置

```
"plugins":[
    [
      "component",
      [
        {
          "libraryName":"element-ui",
          "styleLibraryName":"theme-chalk"
        }
      ]
    ]
  ]
```
- 使用

```
//局部引用
import {Button} from "element-ui"
import {name1,name2} from "element-ui"
//注入Button之类的名字参考官网
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Button);
//全部引用
import ElementUi from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUi);
```
- 官方不再推荐使用vue-resource,变成了axios

```
axios({
      method: 'Get',
      url: '/list.json',
      data: {
          firstName: 'Fred',
          lastName: 'Flintstone'
      }
  }).then(function(res){
      console.log(res);
  }).catch(function(){
        //失败回调
  });
```
- element-ui主要运用在PC端，mint-ui主要运用在移动端，可以[参考官网](http://mint-ui.github.io/#!/zh-cn)
- 自定义组件如果想添加事件，形式 事件.native















