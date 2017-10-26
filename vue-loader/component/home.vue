<template>
    <h1>首页界面</h1>
    <ul>
        <li>
            <a v-link="{path:'/home/login'}">用户登录</a>
            <a v-link="{path:'/home/reg'}">用户注册</a>
        </li>
    </ul>
    <div class="box">
        <router-view>

        </router-view>
    </div>
</template>
<style>
    .box{
        background: #ddd;
        color: #ff0000;
        border: 1px solid #333;
    }
</style>