import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
let store = new Vuex.Store({
    state: {
        school_range_obj: [],
        school_area_obj: [],
        overall_search: [],
        college_search: [],
        major_search: []
    },
    mutations: {
        update_school_range: function (state, data) {
            state.school_range_obj = data;
        },
        update_school_area: function (state, data) {
            state.school_area_obj = data;
        },
        reset_school_range: function (state, list) {
            let arr = JSON.parse(JSON.stringify(state.school_range_obj));
            arr.map((item, index) => {
                if (list.index === index) {
                    item.selected = list.selected;
                } else {
                    item.selected = false;
                }
                return item;
            });
            let selected_none = true;
            arr.forEach((item, index) => {
                if (index === 0) { return };
                if (item.selected) {
                    selected_none = false;
                }
            });
            if (selected_none) {
                arr[0].selected = true;
            }
            state.school_range_obj = arr;
        },
        reset_school_area: function (state, list) {
            let arr = JSON.parse(JSON.stringify(state.school_area_obj));
            if (list.index === 0) {
                arr = arr.map((item, index) => {
                    item.selected = (index === 0);
                    return item;
                });
            } else {
                arr[0].selected = false;
                arr[list.index].selected = list.selected;
            }
            let selected_none = true;
            arr.forEach((item, index) => {
                // if (index === 0) { return };
                if (item.selected) {
                    selected_none = false;
                }
            });
            if (selected_none) {
                arr[0].selected = true;
            }
            state.school_area_obj = arr;
        },
        clear_range: function (state) {
            state.school_range_obj.forEach(function (item, index) {
                item.selected = (index === 0);
            });
        },
        clear_area: function (state) {
            state.school_area_obj.forEach(function (item, index) {
                item.selected = (index === 0);
            });
        }
    },
    getters: {
        get_school_range: function (state) {
            let str = '';
            state.school_range_obj.forEach(function (item, index) {
                if (item.selected) {
                    str = item.value;
                }
            });
            return str;
        },
        get_school_area: function (state) {
            let arr = [];
            state.school_area_obj.forEach(function (item, index) {
                if (item.selected) {
                    arr.push(item.value);
                }
            });
            return arr.join();
        }
    }
});
export default store;