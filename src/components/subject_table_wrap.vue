<template>
    <table class="subject_table_bottom">
        <thead>
            <tr>
                <th  v-for="(item,index) in overallSearchTitle" :key='index'>{{item}}</th>
            </tr>
        </thead>
        <slot></slot>
    </table>
</template>
<script>
export default {
    props:{
        'overallSearchTitle':{
            type: Array,
            required: true
        }
    }
}
</script>
<style scoped>
    .subject_table_bottom{
        width: 100%;
        margin-top: 20px;
        text-align: center;
        border-collapse: collapse;
    }
    .subject_table_bottom td, .subject_table_bottom th{
        padding: 10px 0;
        border: solid 1px #ccc;
    }
    .subject_table_bottom th{
        background: #00a05c;
        color: #fff;
        font-weight: normal;
    }
</style>


