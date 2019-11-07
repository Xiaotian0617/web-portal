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
        <CarouselItem>
            <div>
              <a href="javascript:void(0);">
                <img width="100%" class="carouse-img" :src="indexSlide1" alt="carouse1">
              </a>
            </div>
        </CarouselItem>
        <CarouselItem>
            <div>
              <a href="javascript:void(0);">
                <img width="100%"  class="carouse-img" :src="indexSlide2" alt="carouse2">
              </a>
            </div>
        </CarouselItem>
        <CarouselItem>
            <div>
              <a href="javascript:void(0);">
                <img width="100%"  class="carouse-img" :src="indexSlide3" alt="carouse3">
              </a>
            </div>
        </CarouselItem>
    </Carousel>
    <div class="main">
      <div class="content clearfix">
        <div class="article">
          <div class="outer">
            <h2>实时动态</h2>
            <Tabs value="active">
              <TabPane label="学习中心" name='active'>
                <article-list :articleList="sdutyList"/>
              </TabPane>
              <TabPane label="新闻中心">
                <article-list :articleList="sdutyList"/>
              </TabPane>
              <TabPane label="本月活动">
                <article-list :articleList="sdutyList"/>
              </TabPane>
              <TabPane label="相关报道">
                <article-list :articleList="sdutyList"/>
              </TabPane>
          </Tabs>
          </div>
        </div>
        <div class="photo_gallery">
          <a href="http://changchun.theme.yurl.vip/posts/x000028" class="photo_item">
            <img :src="slide1" />
          </a>
          <a href="http://changchun.theme.yurl.vip/posts/x000031" class="photo_item">
            <img :src="slide2" />
          </a>
          <a href="http://changchun.theme.yurl.vip/posts/x000032" class="photo_item">
            <img :src="slide3" />
          </a>
        </div>
        <div class="bnr">
          <a href="http://changchun.theme.yurl.vip/posts/x000030" class="bnr_item bnr_item_1">
            <img :src="bnr1" />
            <div class="bnr_item_bottom">
              <span class="bnr_item_title">职场英语说话艺术之10句职场用语推荐</span>
            </div>
          </a>
          <a href="http://changchun.theme.yurl.vip/posts/x000029" class="bnr_item bnr_item_2">
            <img :src="bnr2" />
            <div class="bnr_item_bottom">
              <span class="bnr_item_title">职场英语——外企“菜鸟”最容易犯的错误</span>
            </div>
          </a>
          <a href="http://changchun.theme.yurl.vip/posts/x000028" class="bnr_item bnr_item_3">
            <img :src="bnr3" />
            <div class="bnr_item_bottom">
              <span class="bnr_item_title">英语口语——那些让你出口成章的英语短语</span>
            </div>
          </a>
          <a href="http://changchun.theme.yurl.vip/posts/x000027" class="bnr_item bnr_item_4">
            <img :src="bnr4" />
            <div class="bnr_item_bottom">
              <span class="bnr_item_title">这一次，我们不仅深入美国文化 更探索地球奇迹！</span>
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
    };
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
