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
-011.html键盘事件
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
   - 字符串中带有html标签如何转义后渲染,{{{数据}}}使用三个大括号实现。
- 015.html 过滤器
   - 过滤器 使用方法 {{数据|过滤器}}
   - vue提供了常用的过滤器 uppercase 将小写转换为大写
   - lowercase大写转小写，首字母大写 capitalize
   - currency 将数字转化为带金钱符号的数字 直接使用默认转换为 $num，如果想改变生成的符号，可以在过滤去后面传参，比如说{{12|currency "￥"}}就会生成人民币
   - 多个过滤器的使用 {{数据|过滤器1|过滤器2|...}}
- 016.html ajax交互
  -  vue本身不支持ajax 如果想要使用这个功能需要引入vue-resource.js文件。
  -  使用方法 ````this.$http.get("../data/list.json").then(function(res){
                       console.log(res.data);
                    },function(){
                        console.log("失败函数")
                    });````
  -  发送数据````this.$http.get("../data/list.json"，{这里是发送的服务器的数据}).then(function(res){
                       console.log(res.data);
                    },function(){
                        console.log("失败函数")
                    });````
  - post同理                });````
  -  发送数据````this.$http.get("../data/list.json"，{emulateJson:true}).then(function(res){
                       console.log(res.data);
                    },function(){
                        console.log("失败函数")
                    });````