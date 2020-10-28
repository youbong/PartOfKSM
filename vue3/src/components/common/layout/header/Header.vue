<template>
  <div id="KsmHead" class="head_ksm">
    <div class="inner_head">
      <h1 class="tit_logo">
        <router-link :to="$routerPath.PROFILE" class="link_logo">
          <img src="/assets/images/logo_ksm.png" class="img_logo" alt="">
        </router-link>
      </h1>
      <Gnb/>
    </div>
  </div>
</template>

<script>
import Gnb from './Gnb';

export default {
  name: 'Header',
  components:{
    Gnb
  }
}
</script>
<style scoped>
/* .head_ksm{background-color:#19BD9B} */
.head_ksm{position:fixed;top:0;left:0;right:0;z-index:100;border-bottom:1px solid #19BD9B;background-color:#fff}
.head_ksm .inner_head{position:relative;max-width:1000px;margin:0 auto}
.head_ksm .inner_head:after{display:block;visibility:hidden;height:0;font-size:0;clear:both;content:''}

.head_ksm .tit_logo{float:left}
.head_ksm .tit_logo .link_logo{display:block;height:59px;padding:0 20px;font-size:0;white-space:nowrap}
.head_ksm .tit_logo .link_logo:after{display:inline-block;height:100%;vertical-align:middle;content:''}
.head_ksm .tit_logo .img_logo{display:inline-block;width:161px;height:59px;vertical-align:middle;white-space:normal}

@media all and (max-width:800px){
  .head_ksm .tit_logo .img_logo{width:130px;height:auto}
}
</style>