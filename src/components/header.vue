<template>
  <div>
    <div id="header">
      <div class="head_wrapper">
        <a href="/" class="logo">
          <img src="./../assets/img/home/logo.png" alt="长春" class="logo" />
        </a>
        <ul class="header_ul">
          <li class="nv_list">
            <a href="/" class="nav_item">首页</a>
          </li>

          <li class="nv_list">
            <a href="/study" class="nav_item">英语学习</a>
          </li>

          <li class="nv_list">
            <a href="/news" class="nav_item">新闻动态</a>
          </li>

          <li class="nv_list">
            <a href="/other" class="nav_item">相关活动</a>
          </li>

          <li class="nv_list">
            <a href="/about" class="nav_item">关于我们</a>
          </li>
        </ul>
        <div class="head-btn settings-mobile_btn_color">
          <i class="iconfont icon-hanbao" id="nav_mobile"></i>
        </div>
      </div>
    </div>
    <div class="container wrapper-mobile_nav" id="mobile_menu">
      <div class="mobile_nav">
        <!-- -->
        <div class="mobile_nav_menu settings-mobi_nav_background">
          <div class="mobile_nav_top settings-top_color settings-main_border">
            <i class="iconfont icon-close" id="closeMbileNav"></i>
          </div>
          <!-- 一级菜单 -->
          <ul id="side-nav-link" class="side-nav-link">
            <li class="side-nav-link-each">
              <a
                class="settings-nav_text_color settings-sideLinkHover_color"
                href="/"
              >首页</a>
            </li>

            <li class="side-nav-link-each">
              <a
                class="settings-nav_text_color settings-sideLinkHover_color"
                href="/study"
              >英语学习</a>
            </li>

            <li class="side-nav-link-each">
              <a
                class="settings-nav_text_color settings-sideLinkHover_color"
                href="/news"
              >新闻动态</a>
            </li>

            <li class="side-nav-link-each">
              <a
                class="settings-nav_text_color settings-sideLinkHover_color"
                href="/other"
              >相关活动</a>
            </li>

            <li class="side-nav-link-each">
              <a
                class="settings-nav_text_color settings-sideLinkHover_color"
                href="/about"
              >关于我们</a>
            </li>

            <!---->
          </ul>
        </div>
        <div class="mobile_nav_bg" id="mobile_bg"></div>
        <!-- -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MyHeader'
};
</script>
