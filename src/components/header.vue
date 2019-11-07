<template>
  <div>
    <div id="header">
      <div class="head_wrapper">
        <a href="/" class="logo">
          <img src="./../assets/img/home/logo.png" alt="长春" class="logo" />
        </a>
        <ul class="header_ul">
          <li class="nv_list" v-for="(item, index) in memuList" :key="index">
            <a href="/study" class="nav_item">{{item.nmName}}</a>
          </li>
          <li class="nv_list">
            <a @click="showModel = true" class="nav_item">登录/注册</a>
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
            <li class="side-nav-link-each" v-for="(item, index) in memuList" :key="index">
              <a
                class="settings-nav_text_color settings-sideLinkHover_color"
                href="/"
              >{{item.nmName}}</a>
            </li>
          </ul>
        </div>
        <div class="mobile_nav_bg" id="mobile_bg"></div>
        <!-- -->
      </div>
    </div>
    <Modal
        v-model="showModel"
        :title="isLogin?'登录':'注册'"
        @on-ok="doLogin"
        @on-cancel="showModel = false"
        >
        <my-form ref="myForm" :isLogin="isLogin" @changeStatus="changeStatus"/>
    </Modal>
  </div>
</template>
<script>
import MyForm from './register';
export default {
  props: {
    // 菜单列表
    memuList: {
      type: Array
    }
  },
  components: {
    MyForm
  },
  name: 'MyHeader',
  data () {
    return {
      // 弹窗显示
      showModel: false,
      // 是否是登录
      isLogin: true
    };
  },
  methods: {
    // 进行登录操作
    doLogin () {
      let formData = this.$refs.myForm.getData();
      console.info(formData);
    },
    // 更新当前状态
    changeStatus (status) {
      this.isLogin = status;
    }
  }
};
</script>
