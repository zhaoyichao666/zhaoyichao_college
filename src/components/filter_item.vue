<template>
    <span class="filter-item" @click="toggle" :class="{selected:rangeObj.selected}">{{rangeObj.value}}</span>
</template>
<script>
export default {
    data: () => {
        return {

        }
    },
    props:{
        rangeObj:{
            type: Object,
            required: true
        },
        index:{
            type: Number,
            required: true
        },
        catagory:{
            type: String,
            required: true
        }
    },
    methods: {
        toggle: function ( ) {
            /* bus.$emit(this.catagory, {
                index: this.index,
                selected: !this.rangeObj.selected
            }) */
            if(this.catagory === '高校层次'){
                this.$store.commit('reset_school_range', {index: this.index,selected: !this.rangeObj.selected});
                return;
            }
            if(this.catagory === '高校地区'){
                this.$store.commit('reset_school_area', {index: this.index,selected: !this.rangeObj.selected});
            }
        }
    }
}
</script>
<style scoped>

</style>
