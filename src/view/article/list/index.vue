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
import homeApi from '../../../api/home';
export default {
  components: {
    MyHeader, MyFooter, MyMain
  },
  data () {
    return {
      memuList: []
    };
  },
  mounted () {
    this.getMemuList();
  },
  methods: {
    async getMemuList () {
      const res = await homeApi.getMemu();
      this.memuList = res.data;
    }
  }
};
</script>

<style scoped>
.prolist-spfilter-pagenation{
  margin-top: 30px;
}
</style>

<style>
   @import url('../../../assets/css/main.css');
   @import url('../../../assets/css/reset.css');
</style>
