<template>
  <div class="modal-content">
    <Form ref="formInline" :model="formInline" :rules="ruleInline">
      <FormItem prop="user" label="用户名">
        <Input type="text" prefix="ios-contact-outline" v-model="formInline.user" size="large" placeholder="请输入用户名"/>
      </FormItem>
      <FormItem prop="password" label="密码">
        <Input type="password" prefix="ios-lock-outline" v-model="formInline.password" size="large" placeholder="请输入密码"/>
      </FormItem>
      <FormItem :label="isLogin?'切换注册':'切换登录'">
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
      required: true
    }
  },
  data () {
    return {
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
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
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!');
        } else {
          this.$Message.error('Fail!');
        }
      });
    },
    getData () {
      return this.formInline;
    },
    changeSwitch (status) {
      this.$emit('changeStatus', status);
    }
  }
};
</script>
