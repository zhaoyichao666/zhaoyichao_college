<template>
    <div class="subject_table_box">
        <table class="subject_table" v-for="(value, index) in overallSearchArr" :key="index">
            <thead>
                <tr>
                    <th>选考科目</th>
                    <th>高校数</th>
                    <th>专业（类）数</th>
                    <th>科目比例</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in value" :key="index">
                    <td>{{item.subject}}</td>
                    <td>{{item.collegesCount}}</td>
                    <td>{{item.majorCount}}</td>
                    <td>{{item.rate}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    props:{
        'overallSearchArr':{
            type: Array,
            required: true
        }
    }
}
</script>
<style scoped>
    .subject_table_box:after{
        content:'';
        display: block;
        clear: both;
    }
    .subject_table{
        width: 50%;
        float: left;
        text-align: center;
        border-collapse: collapse;
    }
    .subject_table td, .subject_table th{
        padding: 10px 0;
        border: solid 1px #ccc;
    }
    .subject_table th{
        background: #00a05c;
        color: #fff;
        font-weight: normal;
    }
</style>

