<template>
    <div>
        <header class="spa-header">
            <ul class="header-list">
                <router-link tag="li" to="/hot" active-class="active" class="header-item">
                    <a href="javascript:;">热门</a>
                </router-link>
                <router-link tag="li" to="/case" active-class="active" class="header-item">
                    <a href="javascript:;">病例</a>
                </router-link>
                <router-link tag="li" to="/video" active-class="active" class="header-item">
                    <a href="javascript:;">视频</a>
                </router-link>
            </ul>
        </header>
        <router-view></router-view>
    </div>

</template>