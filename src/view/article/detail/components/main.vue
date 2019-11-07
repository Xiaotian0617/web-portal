<template>
  <div class="settings-main_background_color page-body">
    <div class="container settings-main_background_color">
      <div class="sidebar settings-main_background_color">
        <div class="breadcrumb settings-main_text_color txt-overflow">
          <div>最新文章</div>
          <div class="post-re-list settings-main_border" id="post-re-list">
            <a
              :href="item.href"
              class="post-re-each settings-main_border settings-text_color"
              v-for="(item, index) in newArticles" :key="index"
            >
              <span class="post-re-each-dot"></span>{{item.title}}
            </a>
          </div>
        </div>
        <div class="sidebar-wx">
          <div class="sidebar-wx-title">订阅微信公众号</div>
          <img src="../../../../assets/img/home/index_footer_qr_1.png" alt />
        </div>
      </div>

      <div class="mainbar settings-main_background_color">
        <div class="post-wrapper">
          <div class="post-catalog">
            <a class="settings-main_desc_color" href="/">首页 &gt;</a>
            <a
              class="settings-main_desc_color"
              href="/study"
            >所有文章 &gt;</a>

            <a
              class="settings-main_desc_color post-dir-link"
              href="/news"
            >本月活动</a>

            <a
              class="settings-main_desc_color post-dir-link"
              href="/about"
            >相关报道</a>

          </div>
          <div class="post-cont settings-main_content_background_color single-post-cont">
            <div class="post">
              <h2 class="post-title settings-main_header_color">{{article.title}}</h2>
              <div class="post-info settings-main_desc_color">
                <span class="post-info-publish_at">{{article.cTime}}</span>
                <span class="post-info-dirs">&nbsp;&nbsp;|&nbsp;&nbsp;标签：{{article.tag}}</span>
              </div>
              <div class="post-content">
                <div v-html="article.content">{{article.content}}</div>
              </div>
              <!---->
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
      newArticles: [{
        href: '#',
        title: '为什么邀请互联网大拿讲课?'
      }, {
        href: '#',
        title: '为什么邀请互联网大拿讲课?'
      }, {
        href: '#',
        title: '为什么邀请互联网大拿讲课?'
      }, {
        href: '#',
        title: '为什么邀请互联网大拿讲课?'
      }, {
        href: '#',
        title: '为什么邀请互联网大拿讲课?'
      }, {
        href: '#',
        title: '为什么邀请互联网大拿讲课?'
      }],
      article: {
        title: '成人英语培训——如何用英语来称呼另一半',
        cTime: '2017-03-01 10:57',
        tag: '英语',
        content: '<p>\n' +
                '                  <span\n' +
                '                    style="font-family: &#39;Microsoft Yahei&#39;; font-size: 14px; line-height: 1.75;"\n' +
                '                  >海外课堂第五季，让我们来看看前几季，我们的探索者是如何探索他们心中的美国的：</span>\n' +
                '                </p>\n' +
                '                <p>\n' +
                '                  <span\n' +
                '                    style="font-family: &#39;Microsoft Yahei&#39;; font-size: 14px; line-height: 1.75;"\n' +
                '                  >在前几季中，我们的同学们充分探索了美国，并体会到了跟别人完全不一样的文化，看看前几次的回忆：</span>\n' +
                '                </p>\n' +
                '                <p>\n' +
                '                  <span\n' +
                '                    style="font-family: &#39;Microsoft Yahei&#39;; font-size: 14px; line-height: 1.75;"\n' +
                '                  >\n' +
                '                    最美的游学，风景如何：\n' +
                '                    <a href="http://dwz.cn/124bEX">http://dwz.cn/124bEX</a>\n' +
                '                  </span>\n' +
                '                </p>\n' +
                '                <p>\n' +
                '                  <span\n' +
                '                    style="font-family: &#39;Microsoft Yahei&#39;; font-size: 14px; line-height: 1.75;"\n' +
                '                  >\n' +
                '                    最帅的外教，还能学的进去：\n' +
                '                    <a href="http://dwz.cn/124ckv">http://dwz.cn/124ckv</a>\n' +
                '                  </span>\n' +
                '                </p>\n' +
                '                <p>\n' +
                '                  <span\n' +
                '                    style="font-family: &#39;Microsoft Yahei&#39;; font-size: 14px; line-height: 1.75;"\n' +
                '                  >这次，我们要再次造访Telluride，让生活中的美国小镇变成我们的课堂，我们更要深入地球地质地貌的奇迹，让人魂牵梦绕的---黄石公园。</span>\n' +
                '                </p>\n' +
                '                <p>\n' +
                '                  <span\n' +
                '                    style="font-family: &#39;Microsoft Yahei&#39;; font-size: 14px; line-height: 1.75;"\n' +
                '                  >可能你在电影《2012》中见识过她的壮美，可能你在各种纪录片中欣赏过她的灵动，但是你绝对想象不到，深入她，融入她，成为她的一部分，是人生中多么美妙的体验。</span>\n' +
                '                </p>\n' +
                '                <p>\n' +
                '                  <span\n' +
                '                    style="font-family: &#39;Microsoft Yahei&#39;; font-size: 14px; line-height: 1.75;"\n' +
                '                  >世界上最大的火山口之一；</span>\n' +
                '                </p>\n' +
                '                <p>\n' +
                '                  <span\n' +
                '                    style="font-family: &#39;Microsoft Yahei&#39;; font-size: 14px; line-height: 1.75;"\n' +
                '                  >世界上面积最大的森林之一；</span>\n' +
                '                </p>\n' +
                '                <p>\n' +
                '                  <span\n' +
                '                    style="font-family: &#39;Microsoft Yahei&#39;; font-size: 14px; line-height: 1.75;"\n' +
                '                  >全美国森林总面积的90%；</span>\n' +
                '                </p>\n' +
                '                <p>\n' +
                '                  <span\n' +
                '                    style="font-family: &#39;Microsoft Yahei&#39;; font-size: 14px; line-height: 1.75;"\n' +
                '                  >超过10,000温泉和300多个间歇泉；</span>\n' +
                '                </p>\n' +
                '                <p>\n' +
                '                  <span\n' +
                '                    style="font-family: &#39;Microsoft Yahei&#39;; font-size: 14px; line-height: 1.75;"\n' +
                '                  >拥有290多个壮美瀑布；</span>\n' +
                '                </p>\n' +
                '                <p>\n' +
                '                  <span\n' +
                '                    style="font-family: &#39;Microsoft Yahei&#39;; font-size: 14px; line-height: 1.75;"\n' +
                '                  >无数野生动物擦身而过；</span>\n' +
                '                </p>\n' +
                '                <p>\n' +
                '                  <span\n' +
                '                    style="font-family: &#39;Microsoft Yahei&#39;; font-size: 14px; line-height: 1.75;"\n' +
                '                  >更多内容：http://dwz.cn/124mOK</span>\n' +
                '                </p>'
      }
    };
  }
};
</script>
