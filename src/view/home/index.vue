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
      bottomList: null,
      indexSlide1: require('@/assets/img/home/head1.jpg'),
      indexSlide2: require('@/assets/img/home/head2.jpg'),
      indexSlide3: require('@/assets/img/home/head3.jpg'),
      slide1: require('@/assets/img/home/slide_01.png'),
      slide2: require('@/assets/img/home/slide_02.png'),
      slide3: require('@/assets/img/home/slide_03.png'),
      bnr1: require('@/assets/img/home/bottom1.jpg'),
      bnr2: require('@/assets/img/home/bottom2.jpg'),
      bnr3: require('@/assets/img/home/bottom3.jpg'),
      bnr4: require('@/assets/img/home/bottom4.jpg'),
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
        this.$Message["error"]({
            background: true,
            content: "似乎有点问题奥，刷新下吧~"
          });
      }
      // 设置默认值
      this.leftClassify = this.memuList[0].children;
      this.topList = [{id:1,imgUrl:this.indexSlide1},{id:2,imgUrl:this.indexSlide2},{id:3,imgUrl:this.indexSlide3}];
      this.rightList = [{id:1,imgUrl:this.slide1},{id:2,imgUrl:this.slide2},{id:3,imgUrl:this.slide3}];
      this.bottomList = [{id:1,imgUrl:this.bnr1},{id:2,imgUrl:this.bnr2},{id:3,imgUrl:this.bnr3},{id:4,imgUrl:this.bnr4}];
      if(this.memuList[0].children){
        this.leftClassify = this.memuList[0].children;
      }
      if(res.data.topList){
        this.topList = res.data.topList;
      }
      if(res.data.rightList){
        this.rightList = res.data.rightList;
      }
      if(res.data.bottomList){
        this.bottomList = res.data.bottomList;
      }
    }
  }
};
</script>

<style>
   @import url('../../assets/css/main.css');
   @import url('../../assets/css/reset.css');
</style>
