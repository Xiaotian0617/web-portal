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
              <TabPane :label="item.title" :name="index" v-for="(item,index) in leftClassify" :key="index">
                <article-list :articleList="sdutyList"/>
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
import ArticleList from './article-list';
export default {
  props:{
    topList:{
      type: Array,
      default:[{id:1,imgUrl:this.indexSlide1},{id:2,imgUrl:this.indexSlide2},{id:3,imgUrl:this.indexSlide3}]
    },
    rightList:{
      type: Array,
      default:[{id:1,imgUrl:this.slide1},{id:2,imgUrl:this.slide2},{id:3,imgUrl:this.slide3}]
    },
    bottomList:{
      type: Array,
      default:[{id:1,imgUrl:this.bnr1},{id:2,imgUrl:this.bnr2},{id:3,imgUrl:this.bnr3},{id:4,imgUrl:this.bnr4}]
    },
    leftClassify:{
      type: Array,
      default:[{
          title:'学习中心'
        },{
          title:'新闻中心'
        },{
          title:'本月活动'
        },{
          title:'相关报道'
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
      tabIndex: 0,
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
      sdutyList: [{
        href: 'http://changchun.theme.yurl.vip/posts/x000037',
        title: '为什么邀请李克强到加拿大开会？',
        summary: '李克强总理3月15日在北京表示，站在‘互联网＋’的风口上顺势而为，会使中国经济飞起来。当天，总理前往3W 咖啡，体验了一杯“互联网泡沫咖啡”！'
      }, {
        href: 'http://changchun.theme.yurl.vip/posts/x000037',
        title: '为什么邀请李克强到加拿大开会？',
        summary: '李克强总理3月15日在北京表示，站在‘互联网＋’的风口上顺势而为，会使中国经济飞起来。当天，总理前往3W 咖啡，体验了一杯“互联网泡沫咖啡”！'
      }, {
        href: 'http://changchun.theme.yurl.vip/posts/x000037',
        title: '为什么邀请李克强到加拿大开会？',
        summary: '李克强总理3月15日在北京表示，站在‘互联网＋’的风口上顺势而为，会使中国经济飞起来。当天，总理前往3W 咖啡，体验了一杯“互联网泡沫咖啡”！'
      }, {
        href: 'http://changchun.theme.yurl.vip/posts/x000037',
        title: '为什么邀请李克强到加拿大开会？',
        summary: '李克强总理3月15日在北京表示，站在‘互联网＋’的风口上顺势而为，会使中国经济飞起来。当天，总理前往3W 咖啡，体验了一杯“互联网泡沫咖啡”！'
      }, {
        href: 'http://changchun.theme.yurl.vip/posts/x000037',
        title: '为什么邀请李克强到加拿大开会？',
        summary: '李克强总理3月15日在北京表示，站在‘互联网＋’的风口上顺势而为，会使中国经济飞起来。当天，总理前往3W 咖啡，体验了一杯“互联网泡沫咖啡”！'
      }]
    }
  },
  methods:{
    // 左侧文章分类选择标签点击事件
    changeTabs(name){
      this.tabIndex = name;
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
