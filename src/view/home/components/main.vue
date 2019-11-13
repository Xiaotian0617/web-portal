<template>
  <div class="main">
    <!-- 轮播图 -->
    <Carousel
        v-model="carouselNum"
        :autoplay="setting.autoplay"
        :autoplay-speed="setting.autoplaySpeed"
        :dots="setting.dots"
        :radius-dot="setting.radiusDot"
        :trigger="setting.trigger"
        :arrow="setting.arrow"
        class="slide">
        <CarouselItem v-for="(item,index) in topList" :key="index">
            <div>
              <a :href="item.id < 10 ? '#':'/detail/'+item.id+'/1'">
                <img width="100%" class="carouse-img" :src="item.imgUrl" alt="carouse1">
              </a>
            </div>
        </CarouselItem>
    </Carousel>
    <div class="main">
      <div class="content clearfix">
        <div class="article">
          <div class="outer">
            <h2>实时动态</h2>
            <Tabs :value="tabIndex" @on-click="changeTabs">
              <TabPane :label="item.nmName" :name="index+''" v-for="(item,index) in leftClassify" :key="index">
                <article-list :articleList="item.list?item.list:[]"/>
              </TabPane>
          </Tabs>
          </div>
        </div>
        <div class="photo_gallery">
          <a :href="item.id < 10 ? '#':'/detail/'+item.id+'/1'" class="photo_item" v-for="(item,index) in rightList" :key="index">
            <img :src="item.imgUrl" />
          </a>
        </div>
        <div class="bnr">
          <a :href="item.id < 10 ? '#':'/detail/'+item.id+'/1'" :class="'bnr_item bnr_item_'+(index+1)" v-for="(item,index) in bottomList" :key="index">
            <img :src="item.imgUrl" />
            <div class="bnr_item_bottom">
              <span class="bnr_item_title">{{item.title}}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="clear pb30"></div>
  </div>
</template>
<script>
import homeApi from '@/api/home';
import ArticleList from './article-list';
export default {
  props: {
    topList: {
      type: Array,
      default: () => []
    },
    rightList: {
      type: Array,
      default: () => []
    },
    bottomList: {
      type: Array,
      default: () => []
    },
    leftClassify: {
      type: Array,
      default: () => [{
        nmName: '学习中心',
        list: []
      }, {
        nmName: '新闻中心',
        list: []
      }, {
        nmName: '本月活动',
        list: []
      }, {
        nmName: '相关报道',
        list: []
      }]
    }
  },
  name: 'MyMain',
  components: {
    ArticleList
  },
  data () {
    return {
      // 文章 tab值
      articleTab: '0',
      // 轮播图默认播放
      carouselNum: 0,
      // 轮播图设置
      setting: {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: 'outside',
        radiusDot: true,
        trigger: 'hover',
        arrow: 'hover'
      },
      // 左侧分类选中数
      tabIndex: '0'
    };
  },
  watch: {
    leftClassify: function(newValue, oldValue) {
      for (const index in this.leftClassify) {
        this.getAirtcleList(index);
      }
    }
  },
  methods: {
    // 左侧文章分类选择标签点击事件
    changeTabs(index) {
      this.tabIndex = index;
      // this.getAirtcleList(index);
    },
    async getAirtcleList(index) {
      let res = await homeApi.getArticleList({navMenuId: this.leftClassify[index].id});
      this.leftClassify[index].list = res.data;
    }
  }
};
</script>
<style lang="less" scoped>
  .slide{
    height: 480px;
  }
  .carouse-img{
    height: 480px;
  }
</style>
<style>
  .main .ivu-carousel-list{
    border-radius: 10px;
  }
  .main .ivu-carousel-dots li button.radius{
    width: 12px;
    height: 12px;
    border: 2px solid #ed6639;
    background-color: white;
  }
  .main .ivu-carousel-dots li.ivu-carousel-active>button.radius{
    width: 12px;
    background-color: #ed6639;
  }
  .main .ivu-tabs-bar{
    margin-bottom: 0px;
  }
  .main .ivu-tabs-nav .ivu-tabs-tab-active{
    color: #FFFFFF;
    background-color: #ed6639;
    border-radius: 5px;
  }
  .main .ivu-tabs-ink-bar{
    height: 0px;
  }
  .main .ivu-tabs-nav .ivu-tabs-tab:hover{
    color: #515a6e;
  }
  .main .ivu-tabs-nav .ivu-tabs-tab-active:hover{
    color:#FFFFFF;
  }
</style>
