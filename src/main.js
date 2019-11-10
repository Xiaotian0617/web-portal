// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
// 引入 iview
import ViewUI from 'view-design';
// 配置cookie
import cookie from 'vue-cookie';
// 全局修改iview的默认颜色
import './assets/css/my-theme.less';
Vue.prototype.$cookie = cookie;

Vue.config.productionTip = false;
Vue.use(ViewUI);

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = '北京百年精准管理咨询有限公司';
  }
  next();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
