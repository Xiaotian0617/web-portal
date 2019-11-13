<template>
  <div class="outer_content">
    <ul style="display:block;">
      <li class="article_list" v-for="(item, index) in articleList" :key="index">
        <a :href="item.href" class="article_title">{{item.title}}</a>
        <span class="article_summary">{{item.summary}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    // 文章列表
    articleList: {
      type: Array,
      required: true
    }
  },
  data () {
    return {

    };
  }
};
</script>
