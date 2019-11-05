import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      meta: {
        title: '北京百年精准管理咨询有限公司'
      },
      component: () => import('@/view/home/index.vue')
    }
  ]
});
