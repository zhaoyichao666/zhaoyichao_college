<template>
    <div class="route">
        <p class="remind">*由于2020年拟在京招生普通高校专业（类）选考科目范围尚未公布，暂时调用2018年拟在浙招生普通高校专业（类）选考科目范围，该数据仅供参考，正式文件公布后会即时替换！</p>
        <ul class="navlist">
            <router-link class="nav-filter-item" :to='{name: "overall"}' :tag="'li'">综合检索</router-link>
            <router-link class="nav-filter-item" :to='{name: "college"}' :tag="'li'">高校检索</router-link>
            <router-link class="nav-filter-item" :to='{name: "major"}' :tag="'li'">专业检索</router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data:() => {
            return {}
        }
    }
</script>
<style scoped>
    *{
        padding: 0;
        margin: 0;
        list-style: none;
    }
     .route{
        min-width: 960px;
        max-width: 1200px;
        margin: 0 auto;
        font-size: 14px;
    }
    .remind{
        color: #f00;
        line-height: 36px;
    }
    .navlist{
        font-size: 0;
        border-bottom: solid #ccc 1px;
    }
    .nav-filter-item{
        font-size: 14px;
        display: inline-block;
        min-width: 70px;
        padding: 0 5px;
        height: 35px;
        color: #333333;
        text-align: center;
        line-height: 35px;
        cursor: pointer;
    }
    .router-link-active,.nav-filter-item:hover{
        background: rgba(0, 160, 92, 1);
        color: #fff;
    }  
</style>


