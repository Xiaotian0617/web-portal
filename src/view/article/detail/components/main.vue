<template>
  <div class="settings-main_background_color page-body">
    <div class="container settings-main_background_color">
      <div class="sidebar settings-main_background_color">
        <div class="breadcrumb settings-main_text_color txt-overflow">
          <div>最新文章</div>
          <div class="post-re-list settings-main_border" id="post-re-list">
            <a
              :href="'/detail/'+item.id+'/1'"
              class="post-re-each settings-main_border settings-text_color"
              v-for="(item, index) in newArticles"
              :key="index"
            >
              <span class="post-re-each-dot"></span>
              {{item.title}}
            </a>
          </div>
        </div>
        <div class="sidebar-wx">
          <div class="sidebar-wx-title">订阅微信公众号</div>
          <img src="../../../../assets/img/home/gongzhonghao.jpg" alt />
        </div>
      </div>

      <div class="mainbar settings-main_background_color">
        <div class="post-wrapper">
          <div class="post-catalog">
            <a class="settings-main_desc_color" href="/">首页 &gt;</a>
            <a class="settings-main_desc_color" href="/study">所有文章 &gt;</a>

            <a class="settings-main_desc_color post-dir-link" href="/news">{{article.title}}</a>
          </div>
          <div class="post-cont settings-main_content_background_color single-post-cont">
            <div class="post">
              <h2 class="post-title settings-main_header_color">{{article.title}}</h2>
              <div class="post-info settings-main_desc_color">
                <span class="post-info-publish_at">{{article.createDate}}</span>
                <span class="post-info-dirs">&nbsp;&nbsp;|&nbsp;&nbsp;作者：{{article.author}}</span>
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
import HomeApi from '@/api/home.js';
export default {
  name: 'MyMain',
  data () {
    return {
      newArticles: [],
      article: {}
    };
  },
  mounted () {
    const id = this.$route.params.id;
    const type = this.$route.params.type;
    // 页面加载时根据文章id获取文章详情
    this.getArticleDetail(id, type);
  },
  methods: {
    // 获取文章详情
    // 从头部来时，id表示菜单id
    // 从文章进来时 id表示文章id
    async getArticleDetail (id, type) {
      const param = {};
      if (type === '0') {
        const res = await HomeApi.getArticleList({ navMenuId: id });
        const articleList = res.data;
        if (articleList.length === 0) {
          this.$Message['success']({
            background: true,
            content: '没有更多文章啦~'
          });
        }
        param.id = articleList[0].id;
      } else {
        param.id = id;
      }
      const result = await HomeApi.getArticleById(param);
      this.article.id = result.data.id;
      this.article.title = result.data.title;
      this.article.content = result.data.content;
      this.article.author = result.data.author;
      this.article.createDate = result.data.createDate;
      this.newArticles = result.data.latestList;
    }
  }
};
</script>
