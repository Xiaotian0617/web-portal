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
      path: '/study',
      name: '英语学习',
      component: () => import('@/view/article/list/index.vue')
    },
    {
      path: '/news',
      name: '新闻动态',
      component: () => import('@/view/article/detail/index.vue')
    },
    {
      path: '/other',
      name: '相关活动',
      component: () => import('@/view/article/detail/index.vue')
    },
    {
      path: '/about',
      name: '关于我们',
      component: () => import('@/view/article/list/index.vue')
    }
  ]
});
