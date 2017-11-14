<template>
    <tbody>
        <tr>
            <td v-for="(item,index) in rowsbig" :key="index"><span v-if=" index ===0" @click="showtable"><img :src="src" alt=""></span>{{item}}</td>
        </tr>
        <tr>
            <td colspan="9" class="td">
                <table v-show="show">
                    <tr>
                        <td>高校地区</td>
                        <td>高校名称</td>
                        <td>专业（类）</td>
                        <td>类中所含专业</td>
                        <td>选考科目范围</td>
                    </tr>
                    <tr v-for="(item,index) in rowssmall" :key="index">
                        <td>{{item.province}}</td>
                        <td>{{item.collegeName}}</td>
                        <td>{{item.majorName}}</td>
                        <td>{{item.remark.join('、')}}</td>
                        <td>{{item.subjectRangeNames.join('、')}}</td>
                    </tr>
                </table>
            </td>
        </tr>
    </tbody>
</template>
<script>
export default {
    data(){
        return {
            rowsbig:[],
            rowssmall:[],
            show: false,
            src: 'src/img/1.png'
        }
    },
    props:{
        'overallSearchRows': {
            type: Array,
            required: true
        }
    },
    methods: {
        showtable: function(){
            this.show = !this.show;
            if(this.show){
                this.src = 'src/img/2.png';
            }else{
                this.src = 'src/img/1.png';
            }
        }
    },
    created: function () {
        
        this.rowsbig = this.overallSearchRows.slice(0,9)
        this.rowssmall = this.overallSearchRows.slice(9)[0]
        console.log(this.rowssmall)
    }
}
</script>
<style scoped>
    table{
        width: 100%;
        text-align: center;
        border-collapse: collapse;
        background: #f4f4f4;
    }
    table td{
        padding: 10px 0;
        border: solid 1px #ccc;
        font-size: 12px;
    }
    td img{
        cursor: pointer;
        float: left;
        margin-left: 5px;
    }
    .td{
        padding: 0;
    }
</style>


