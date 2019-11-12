<template>
  <div>
    <my-header :memuList="memuList"/>
    <my-main />
    <my-footer />
  </div>
</template>
<script>
import MyHeader from '@/components/header';
import MyFooter from '@/components/footer';
import MyMain from './components/main';
import homeApi from '../../api/home';
export default {
  components: {
    MyHeader, MyFooter, MyMain
  },
  data () {
    return {
      memuList: [],
      showLoginModal: false
    };
  },
  mounted () {
    this.getMemuList();
  },
  methods: {
    async getMemuList () {
      let res = await homeApi.getMemu();
      this.memuList = res.data;
      this.$cookie.set('memu', JSON.stringify(res.data), 1);
    }
  }
};
</script>

<style>
   @import url('../../assets/css/main.css');
   @import url('../../assets/css/reset.css');
</style>
