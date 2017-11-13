import overall from '../pages/overall.vue';
export var routes = [
    {
        path: '/',
        redirect: '/overall'
    },
    {
        name: 'overall',
        path: '/overall',
        component: overall
    },
    {
        name: 'college',
        path: '/college',
        component: {
            template: '<h1>高校检索页面</h1>'
        }
    },
    {
        name: 'major',
        path: '/major',
        component: {
            template: '<h1>专业检索页面</h1>'
        }
    }
];
