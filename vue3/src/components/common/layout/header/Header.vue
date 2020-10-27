<template>
  <div id="KsmHead" class="head_ksm">
    <h1 class="tit_logo">
      <router-link :to="$routerPath.INTRO" class="link_logo">Part Of <span>Kim Seung Min</span></router-link>
    </h1>
    <Gnb/>
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
.head_ksm{border-bottom:2px solid #19BD9B}
.head_ksm .tit_logo{display:inline-block;vertical-align:top}
.head_ksm .tit_logo .link_logo{display:block;padding:19px 20px 17px;font-size:18px;line-height:22px;color:#555}
.head_ksm .tit_logo .link_logo span{display:inline-block;margin-left:4px;color:#19BD9B;vertical-align:top}
</style>