<template>
    <div class="school-range">
        <div class="left-title">高校层次：</div>
        <div class="right-area">
            <filter-item v-for="(value,index) in schoolRangeList" :key="index" :index="index" :range-obj="value" :catagory="'高校层次'"></filter-item>
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
        schoolRangeList:{
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
