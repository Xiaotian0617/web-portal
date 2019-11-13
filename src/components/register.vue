<template>
  <div class="modal-content">
    <Form ref="user" :model="user" :rules="ruleInline">
      <FormItem prop="account" label="用户名">
        <Input type="text" prefix="ios-contact-outline" v-model="user.account" placeholder="请输入用户名" :disabled="isEdit" />
      </FormItem>
      <FormItem prop="password" label="密码">
        <Input type="password" prefix="ios-lock-outline" v-model="user.password" placeholder="请输入密码"/>
      </FormItem>
      <FormItem prop="nickName" label="昵称" v-show="(!isLogin)||isEdit">
        <Input type="text" prefix="ios-contact-outline" v-model="user.nickName" placeholder="请输入昵称"/>
      </FormItem>
      <FormItem prop="phone" label="手机号" v-show="(!isLogin)||isEdit">
        <Input type="text" prefix="ios-lock-outline" v-model="user.phone" placeholder="请输入手机号"/>
      </FormItem>
      <FormItem prop="email" label="邮箱" v-show="(!isLogin)||isEdit">
        <Input type="text" prefix="ios-contact-outline" v-model="user.email" placeholder="请输入邮箱"/>
      </FormItem>
      <FormItem prop="realName" label="真实姓名" v-show="(!isLogin)||isEdit">
        <Input type="text" prefix="ios-lock-outline" v-model="user.realName" placeholder="请输入真实姓名"/>
      </FormItem>
      <FormItem prop="bankAccount" label="绑定的银行卡号" v-show="(!isLogin)||isEdit">
        <Input type="text" prefix="ios-lock-outline" v-model="user.bankAccount" placeholder="请输入你需要绑定的银行卡号"/>
      </FormItem>
      <FormItem prop="bankType" label="绑定的银行名" v-show="(!isLogin)||isEdit">
        <Input type="text" prefix="ios-lock-outline" v-model="user.bankType" placeholder="请输入银行名"/>
      </FormItem>
      <FormItem prop="bank" label="具体的支行信息" v-show="(!isLogin)||isEdit">
        <Input type="text" prefix="ios-lock-outline" v-model="user.bank" placeholder="请输入具体的支行信息"/>
      </FormItem>
      <FormItem v-show="!isEdit" :label="isLogin?'切换注册':'切换登录'" style="margin-top:20px">
        <i-switch :value="isLogin" size="large" @on-change="changeSwitch">
            <span slot="open">登录</span>
            <span slot="close">注册</span>
        </i-switch>
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  props: {
    isLogin: {
      type: Boolean,
      default: true
    },
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      user: this.getLoginedUser(),
      ruleInline: {
        account: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码不得小于6位', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    getData () {
      return this.user;
    },
    changeSwitch (status) {
      this.$emit('changeStatus', status);
    },
    getLoginedUser () {
      const userStr = localStorage.getItem('user');
      if (userStr === 'null' || !userStr) {
        return { account: '', password: '' };
      }
      return JSON.parse(userStr);
    }
  }
};
</script>
<style>
  .modal-content .ivu-form-item{
    margin-bottom: 5px;
  }
</style>
