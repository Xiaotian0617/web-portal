<template>
  <div>
    <div id="header">
      <div class="head_wrapper">
        <a href="/" class="logo">
          <img src="./../assets/img/home/logo.png" alt="百年精准" class="logo" />
        </a>
        <ul class="header_ul">
          <li class="nv_list" v-for="(item, index) in memuList" :key="index">
            <a :href="getHeaderHref(item,index)" class="nav_item">{{item.nmName}}</a>
          </li>
          <li class="nv_list" v-if="checkLogin">
            <a @click="showModel = true" class="nav_item">登录/注册</a>
          </li>
          <li class="nv_list person-li" v-if="!checkLogin">
            <a class="nav_item">个人中心</a>
            <person-center ref="personCenter" class="persion-card" />
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
      :styles="{top: '20px'}"
    >
      <my-form ref="myForm" :isLogin="isLogin" @changeStatus="changeStatus" />
    </Modal>
  </div>
</template>
<script>
import MyForm from "./register";
import PersonCenter from "./persion-center";
import loginApi from "@/api/login";
export default {
  props: {
    // 菜单列表
    memuList: {
      type: Array
    }
  },
  components: {
    MyForm,
    PersonCenter
  },
  name: "MyHeader",
  data() {
    return {
      // 弹窗显示
      showModel: false,
      // 是否是登录
      isLogin: true,
      // 登录状态  true 未登录
      loginStatus: true
    };
  },
  computed: {
    checkLogin: function() {
      let userStr = this.$cookie.get("user");
      if (userStr && userStr !== "null") {
        let user = JSON.parse(userStr);
        return false;
      }
      return true;
    }
  },
  methods: {
    // 获取菜单的访问路径
    getHeaderHref(item, index) {
      if (item.nmName == "首页") {
        return "/";
      }
      if (item.children) {
        // 列表
        return "/list/" + index + "/0";
      } else {
        // 详情
        return "/detail/" + item.id + "/0";
      }
    },
    // 进行登录操作
    async doLogin() {
      let formData = this.$refs.myForm.getData();
      let result;
      if (this.isLogin) {
        result = await loginApi.doLogin(formData);
        this.$Message["success"]({
          background: true,
          content: "登录成功"
        });
        this.showModel = false;
        this.$cookie.set("user", JSON.stringify(result.data), 1);
      } else {
        result = await loginApi.doRegister(formData);
        this.$Message["success"]({
          background: true,
          content: "注册成功"
        });
        this.showModel = false;
      }
      this.$router.go(0);
    },
    // 更新当前状态
    changeStatus(status) {
      this.isLogin = status;
    }
  }
};
</script>
<style scoped>
.persion-card {
  position: fixed;
  display: none;
  z-index: 999;
}
.person-li:hover .persion-card {
  display: inline;
}
.logo {
  width: 80px;
}
</style>