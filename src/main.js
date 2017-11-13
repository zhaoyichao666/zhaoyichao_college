// 引用全局样式 reset.css
import './css/reset.css';
// 引用框架
import Vue from 'vue';
import store from './store/store';
import app from './app.vue';
import router from './routes/router';
import './axios/axios';
new Vue({
    el: '.container',
    router: router,
    render: function (createElement) {
        return createElement(app);
    },
    store: store
});
if (module.hot) {
    module.hot.accept();
}
