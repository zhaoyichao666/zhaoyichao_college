import Vue from 'vue';
import axios from 'axios';
let http = {
    install: function (v) {
        v.prototype.$http = axios;
    }
};
Vue.use(http);