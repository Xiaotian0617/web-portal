<template>
  <div>
    <my-header />
    <my-main />
    <my-footer />
  </div>
</template>
<script>
import MyHeader from '@/components/header';
import MyFooter from '@/components/footer';
import MyMain from './components/main';
export default {
  components: {
    MyHeader, MyFooter, MyMain
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
