<template>
  <div>
    <div class="settings-main_background_color page-body">
      <div class="container settings-main_background_color">
        <div class="sidebar">
          <div class="post-dirs-wrapper">
            <ul class="post-dirs-list settings-main_border" id="post-dirs-list">
              <li
                class="post-dir-1 settings-main_border"
                :class="index == articleIndex?'active':''"
                v-for="(item, index) in articleClassify"
                :key="index"
              >
                <a
                  @click="initArticleList(item.id,1,index)"
                  class="post-dir-1-box settings-text_color"
                >
                  <span class="post-dir-dot"></span>
                  {{item.nmName}}
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
                <h2>{{rightLable}}</h2>
              </div>
              <div class="post">
                <div class="post-list lazyload_scope">
                  <div class="post-list-each" v-for="(item, index) in articleList" :key="index">
                    <div class="post-list-head">
                      <!-- <span class="post-info-dirs">
                        <a :href="item.href" class="settings-link_color">[{{item.classify}}]</a>
                      </span> -->
                      <span class="post-list-title settings-main_header_color">
                        <a :href="'/detail/'+item.id+'/1'">{{item.title}}</a>
                      </span>
                    </div>
                    <span class="post-info-publish_at settings-main_desc_color">{{item.createDate}}</span>
                  </div>
                </div>

                <!-- <div class="prolist-spfilter-pagenation">
                  <Page :total="100" />
                </div>-->
              </div>
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
      // 右侧文章列表
      articleList: [],
      // 文章分类
      articleClassify: [],
      // 当前选择分类
      articleIndex: -1,
      // 当前选择菜单
      memuName: '',
      rightLable: '全部文章'
    };
  },
  mounted () {
    const index = this.$route.params.index;
    const type = this.$route.params.type;
    // 页面加载时根据文章id获取文章详情
    this.initArticleList(index, type);
  },
  methods: {
    // 在头部菜单时 index 代表位于菜单的第几个
    // 在左侧分类点击时，index 代表菜单id
    async initArticleList (index, type, clickIndex = 0) {
      const classifyStr = localStorage.getItem('memu');
      if (classifyStr === 'null' || !classifyStr) {
        this.$Message['error']({
          background: true,
          content: '无效的菜单，请重试'
        });
        return;
      }
      const param = {};
      if (type === '0') {
        const classify = JSON.parse(classifyStr);
        // 从头部菜单来的
        if (!classify[index]) {
          this.$Message['error']({
            background: true,
            content: '此菜单无列表，请重试'
          });
          return;
        }
        this.memuName = classify[index].nmName;
        this.articleClassify = classify[index].children;
        param.navMenuId = this.articleClassify[0].parentId;
      } else {
        this.articleIndex = clickIndex;
        this.rightLable = this.articleClassify[clickIndex].nmName;
        param.navMenuId = index;
      }
      const res = await HomeApi.getArticleList(param);
      this.articleList = res.data;
      if (this.articleList.length === 0) {
        this.$Message['success']({
          background: true,
          content: '没有更多文章啦~'
        });
      }
    }
  }
};
</script>
