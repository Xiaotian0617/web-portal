<template>
  <div class="modal-content">
    <Card style="min-width:200px;border-radius:20px;">
      <p slot="title" class="c-wh">个人信息</p>
      <p slot="extra" @click.prevent="logout()" style="line-height:20px" class="c-wh cur">退出登录</p>
      <ul>
        <li>用户名: &nbsp;&nbsp;{{user.account}}</li>
        <li>昵称: &nbsp;&nbsp;{{user.nickName}}</li>
        <li>手机号: &nbsp;&nbsp;{{user.phone}}</li>
        <li>邮箱: &nbsp;&nbsp;{{user.email}}</li>
        <li>真实姓名: &nbsp;&nbsp;{{user.realName}}</li>
        <!-- <li>绑定的银行卡号:&nbsp;&nbsp; {{user.bankAccount}}</li>
        <li>绑定的银行名: &nbsp;&nbsp;{{user.bankType}}</li>
        <li>具体的支行信息: &nbsp;&nbsp;{{user.bank}}</li> -->
      </ul>
      <div class="edit-info">
        <p class="edit-button cur" @click="showModel = true">修改信息</p>
      </div>
    </Card>
    <Modal
      v-model="showModel"
      title="修改信息"
      @on-ok="doEdit"
      @on-cancel="showModel = false"
      :styles="{top: '20px'}"
    >
      <my-form ref="myForm" :isEdit="true"/>
    </Modal>
  </div>
</template>
<script>
import LoginApi from '@/api/login';
import MyForm from './register';
export default {
  components: {
    MyForm
  },
  data () {
    return {
      showModel: false,
      user: {
        account: '',
        password: ''
      }
    };
  },
  mounted () {
    this.initUser();
  },
  methods: {
    initUser () {
      const userStr = localStorage.getItem('user');
      if (userStr && userStr !== 'null') {
        this.user = JSON.parse(userStr);
      }
    },
    logout () {
      localStorage.setItem('user', null);
      this.$router.go(0);
    },
    async doEdit () {
      const formData = this.$refs.myForm.getData();
      await LoginApi.doUpdate(formData);
      this.$Message['success']({
        background: true,
        content: '注册成功'
      });
      this.showModel = false;
      this.logout();
    }
  }
};
</script>
<style>
.modal-content .ivu-form-item {
  margin-bottom: 5px;
}
.modal-content .ivu-card-head {
  background-color: #ed6639;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.modal-content .ivu-card-body li {
  line-height: 20px;
}
.ivu-modal-header-inner {
  color: #ed6639;
}
.edit-info{
  padding-top: 20px;
  padding-bottom: 20px;
}
.edit-button{
  position: absolute;
  right: 20px;
  color: #ed6639;
}
</style>
