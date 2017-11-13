<template>
    <div class="school-area">
        <div class="left-title">高校地区：</div>
        <div class="right-area">
            <filter-item v-for="(value,index) in schoolAreaList" :key="index" :index="index" :range-obj="value" :catagory="'高校地区'"></filter-item>
        </div>
    </div>
</template>
<script>
import filter_item from './filter_item';
export default {
    data: () => {
        return {
            
        }
    },
    props:{
        schoolAreaList:{
            type: Array,
            required: true
        }
    },
    components: {
        "filter-item": filter_item
    }
}
</script>
<style scoped>

</style>