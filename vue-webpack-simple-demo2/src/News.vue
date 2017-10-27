<template>
    <div>
        <h1>这是新闻界面</h1>
        <ul>
            <li><router-link to="/news/detail01/age/10">第一个作者</router-link></li>
            <li><router-link to="/news/detail02/age/11">第一个作者</router-link></li>
        </ul>
        <router-view></router-view>
    </div>
</template>