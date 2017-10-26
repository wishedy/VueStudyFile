<template>
    <h1>新闻界面路由</h1>
    <ul>
        <li>
            <a v-link="{path:'/news/detail/001'}">这是第一条新闻</a>
        </li>
        <li>
            <a v-link="{path:'/news/detail/002'}">这是第二条新闻</a>
        </li>
    </ul>
    <div>
        <router-view></router-view>
    </div>
</template>