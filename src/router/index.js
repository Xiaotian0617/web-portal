import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '首页',
      component: () => import('@/view/home/index.vue')
    },
    {
      path: '/list/:index/:type/',
      name: '文章列表',
      component: () => import('@/view/article/list/index.vue')
    },
    {
      path: '/detail/:id/:type/',
      name: '文章详情',
      component: () => import('@/view/article/detail/index.vue')
    }
  ]
});
