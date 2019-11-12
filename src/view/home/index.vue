<template>
  <div>
    <my-header :memuList="memuList" />
    <my-main :leftClassify="leftClassify" :topList="topList" :rightList="rightList" :bottomList="bottomList" />
    <my-footer />
  </div>
</template>
<script>
import MyHeader from '@/components/header';
import MyFooter from '@/components/footer';
import MyMain from './components/main';
import homeApi from '../../api/home';
export default {
  components: {
    MyHeader, MyFooter, MyMain
  },
  data () {
    return {
      // 顶部菜单
      memuList: [],
      showLoginModal: false,
      // 左侧tab分类
      leftClassify: null,
      // 轮播图
      topList: null,
      // 右侧图片
      rightList: null,
      // 底部图片
      bottomList: null
    };
  },
  watch:{
    memuList:function(newValue,oldValue){
      this.initData();
    }
  },
  mounted () {
    this.getMemuList();
  },
  methods: {
    // 获取菜单信息
    async getMemuList () {
      let res = await homeApi.getMemu();
      this.memuList = res.data;
      this.$cookie.set('memu', JSON.stringify(res.data), 1);
    },
    // 获取首页信息
    async initData(){
      let res;
      try {
        res = await homeApi.getHomeData({});
      } catch (error) {
        
      }
      if(this.memuList[0].children){
        leftClassify = this.memuList[0].children;
      }
      if(res.data.topList){
        topList = res.data.topList;
      }
      if(res.data.rightList){
        rightList = res.data.rightList;
      }
      if(res.data.bottomList){
        bottomList = res.data.bottomList;
      }
    }
  }
};
</script>

<style>
   @import url('../../assets/css/main.css');
   @import url('../../assets/css/reset.css');
</style>
