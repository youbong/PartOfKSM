<template>
  <nav class="gnb_ksm">
    <ul class="list_gnb">
      <li v-for="(item,index) in menuList" :key="index" :class="['item_gnb item_'+item.menuClassNm,item.menuNm === $route.meta.menuNm ? 'on':'']">
        <router-link :to='item.menuPath' class="link_gnb">{{ item.menuNm }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Gnb',
  data(){
    return{
      menuList:[
        {menuNm: 'PROFILE', menuClassNm: 'porofile', menuPath: this.$routerPath.PROFILE},
        {menuNm: 'PROJECT', menuClassNm: 'project', menuPath: this.$routerPath.PROJECT},
        // {menuNm: 'INTRODUCE', menuClassNm: 'introduce', menuPath: this.$routerPath.INTRODUCE},
      ]
    }
  }
}
</script>
<style scoped>
.gnb_ksm{display:inline-block;margin-left:20px;vertical-align:top}
.item_gnb{display:inline-block;vertical-align:top}
.link_gnb{display:block;padding:19px 16px;font-size:15px;line-height:20px;color:#19BD9B}
.item_gnb.on .link_gnb{background-color:#19BD9B;color:#fff}
</style>