<template>
  <div>
    <div class="settings-main_background_color page-body">
      <div class="container settings-main_background_color">
        <div class="sidebar">
          <div class="post-dirs-wrapper">
            <ul class="post-dirs-list settings-main_border" id="post-dirs-list">
              <li class="post-dir-1 settings-main_border" :class="index == articleIndex?'active':''" v-for="(item, index) in articleClassify" :key="index">
                <a
                  :href="item.href"
                  class="post-dir-1-box settings-text_color"
                >
                  <span class="post-dir-dot"></span>{{item.title}}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="mobile-margin"></div>
        <div class="mainbar settings-main_background_color">
          <div class="post-wrapper">
            <div class="post-cont settings-main_content_background_color">
              <div class="pageTitle txt-overflow">
                <h2>{{articleClassify[articleIndex].title}}</h2>
              </div>
              <div class="post">
                <div class="post-list lazyload_scope">
                  <div class="post-list-each" v-for="(item, index) in articleList" :key="index">
                    <div class="post-list-head">
                      <span class="post-info-dirs">
                        <a
                          :href="item.href"
                          class="settings-link_color"
                        >[{{item.classify}}]</a>
                      </span>
                      <span class="post-list-title settings-main_header_color">
                        <a :href="item.href">{{item.title}}</a>
                      </span>
                    </div>
                    <span class="post-info-publish_at settings-main_desc_color">{{item.cTime}}</span>
                  </div>

                </div>

                <div class="prolist-spfilter-pagenation">
                  <a
                    class="prolist-spfilter-pagenation-prev prolist-spfilter-pagenation-prev-disable settings-pagiDisColor"
                    href="javascript:void(0);"
                  >&lt;</a>

                  <span class="prolist-spfilter-pagenation-status">
                    <a
                      class="settings-pagiColor settings-pagiHoverColor selected"
                      href="http://changchun.theme.yurl.vip/posts?size=10&amp;page=1"
                    >1</a>

                    <a
                      class="settings-pagiColor settings-pagiHoverColor"
                      href="http://changchun.theme.yurl.vip/posts?size=10&amp;page=2"
                    >2</a>
                  </span>

                  <a
                    class="prolist-spfilter-pagenation-next settings-pagiColor settings-pagiHoverColor"
                    href="http://changchun.theme.yurl.vip/posts?size=10&amp;page=2"
                  >&gt;</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MyMain',
  data () {
    return {
      // 右侧文章列表
      articleList: [{
        classify: '本月活动',
        title: '成人英语培训——如何用英语来称呼另一半',
        cTime: '2017-03-01 10:57',
        href: '#'
      }, {
        classify: '本月活动',
        title: '成人英语培训——如何用英语来称呼另一半',
        cTime: '2017-03-01 10:57',
        href: '#'
      }, {
        classify: '本月活动',
        title: '成人英语培训——如何用英语来称呼另一半',
        cTime: '2017-03-01 10:57',
        href: '#'
      }, {
        classify: '本月活动',
        title: '成人英语培训——如何用英语来称呼另一半',
        cTime: '2017-03-01 10:57',
        href: '#'
      }, {
        classify: '本月活动',
        title: '成人英语培训——如何用英语来称呼另一半',
        cTime: '2017-03-01 10:57',
        href: '#'
      }, {
        classify: '本月活动',
        title: '成人英语培训——如何用英语来称呼另一半',
        cTime: '2017-03-01 10:57',
        href: '#'
      }, {
        classify: '本月活动',
        title: '成人英语培训——如何用英语来称呼另一半',
        cTime: '2017-03-01 10:57',
        href: '#'
      }, {
        classify: '本月活动',
        title: '成人英语培训——如何用英语来称呼另一半',
        cTime: '2017-03-01 10:57',
        href: '#'
      }, {
        classify: '本月活动',
        title: '成人英语培训——如何用英语来称呼另一半',
        cTime: '2017-03-01 10:57',
        href: '#'
      }, {
        classify: '本月活动',
        title: '成人英语培训——如何用英语来称呼另一半',
        cTime: '2017-03-01 10:57',
        href: '#'
      }],
      // 文章分类
      articleClassify: [{
        title: '全部文章',
        href: '#'
      }, {
        title: '英语咨询',
        href: '#'
      }, {
        title: '学习中心',
        href: '#'
      }, {
        title: '新闻中心',
        href: '#'
      }, {
        title: '本月活动',
        href: '#'
      }, {
        title: '相关报道',
        href: '#'
      } ],
      // 当前选择分类
      articleIndex: 0
    };
  }
};
</script>
