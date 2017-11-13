<template>
    <div class="filter-box">
        <div class="selected-condations clearfix">
            <div class="left-title">已选条件：</div>
            <div class="right-area">
                <p class="selected-item" v-if='$store.getters.get_school_range != "不限"'>{{$store.getters.get_school_range}}<span @click='clear_range'>&times;</span></p>
                <p class="selected-item" v-if='$store.getters.get_school_area != "不限"'>{{$store.getters.get_school_area}}<span @click='clear_area'>&times;</span></p>
            </div>
        </div>
        <div class="condations-box">
            <div class="major-range clearfix">
                <div class="left-title">专业层次：</div>
                <div class="right-area"></div>
            </div>
            <school-range :school-range-list="$store.state.school_range_obj"></school-range>
            <school-area :school-area-list="$store.state.school_area_obj"></school-area>
        </div>
    </div>
</template>
<script>
import school_range from '../components/school_range';
import school_area from '../components/school_area';
export default {
    data: () =>{
        return {
            major_range: {a:"不限", b:"本科", c:"专科"}
        }
    } ,
    methods:{
        clear_range:function(){
            this.$store.commit('clear_range');
        },
        clear_area:function(){
            this.$store.commit('clear_area');
        }
    },
    computed: {
        
        school_area_fn: function(){
            
        }
    },
    created: function () {
        var vm = this;
        this.$http.get('src/data/schoolData.json').then(function (res) {
            let range = res.data.school_range.map(function(value, index){
                return index == 0 ? {value:value, selected:true} : {value:value, selected:false}
            })
            vm.$store.commit('update_school_range', range);
        });
        this.$http.get('src/data/schoolData.json').then(function (res) {
            let area = res.data.school_area.map(function(value, index){
                return index == 0 ? {value:value, selected:true} : {value:value, selected:false}
            })
            vm.$store.commit('update_school_area', area);
        });
        
    },
    components:{
        'school-range': school_range,
        'school-area': school_area
    }
}
</script>
<style>
    .left-title,.right-area{
        float: left;
        box-sizing: border-box;
    }
    .left-title{
        margin: 5px 0;
        text-indent: 10px;
        width: 10%;
    }
    .right-area{  
        width: 90%;
    }
    .selected-item{
        margin: 0;
        display: inline-block;
        border: solid 1px #ccc;
        padding: 0 5px;
    }
    .selected-item span{
        cursor: pointer;
        color: red;
        padding-left: 10px;
    }
    .selected-condations{
        padding: 10px;
        line-height: 35px;
    }.selected-condations::after{
        content: '';
        display: block;
        clear: both;
    }
    .condations-box{
        border: 1px solid #ccc;
        padding: 10px;
        line-height: 35px;
    }
    .major-range::after{
        content: '';
        display: block;
        clear: both;
    }
    .school-range::after{
        content: '';
        display: block;
        clear: both;
    }
    .school-area::after{
        content: '';
        display: block;
        clear: both;
    }
    .filter-item{
        display: inline-block;
        min-width: 70px;
        padding: 0 5px;
        height: 35px;
        color: #333333;
        text-align: center;
        line-height: 35px;
        margin: 5px;
        cursor: pointer;
    }
    .filter-item.selected{
        background: rgba(0, 160, 92, 1);
        color: #fff;
    }
    .filter-item:hover{
        background: rgba(0, 160, 92, 1);
        color: #fff;
    }   
</style>


