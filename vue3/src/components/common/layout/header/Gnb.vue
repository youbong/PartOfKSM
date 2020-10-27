<template>
  <nav class="gnb_ksm">
    <ul class="list_gnb">
      <li v-for="(item,index) in menuList" :key="index" :class="['item_gnb item_'+item.menuClassNm,item.menuNm === $route.meta.menuNm ? 'on':'']">
        <router-link :to='item.menuPath' class="link_gnb">{{ item.menuNm }}</router-link>
        <div v-if="item.subMenuData" class="snb_ksm">
          <ul class="list_snb">
            <li v-for="( snbItem, index ) in item.subMenuData" :key="index">
              <a href="#none" class="link_snb">{{ snbItem.menuNm }}</a>
            </li>
          </ul>
        </div>
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
        {
          menuNm: 'PROFILE',
          menuClassNm: 'porofile',
          menuPath: this.$routerPath.PROFILE,
          subMenuData: [
            { menuNm: 'INFO', menuPath: '' },
            { menuNm: 'SKILL', menuPath: '' },
            { menuNm: 'EXPRIENCE', menuPath: '' },
            { menuNm: 'COVERLETTER', menuPath: '' },
          ]
        },
        {
          menuNm: 'PROJECT',
          menuClassNm: 'project',
          menuPath: this.$routerPath.PROJECT,
          subMenuData: [
            { menuNm: 'All', menuPath: '' },
            { menuNm: '디케이테크인', menuPath: '' },
            { menuNm: '싸이월드', menuPath: '' },
            { menuNm: '주식회사 리메인', menuPath: '' },
            { menuNm: '한빛소프트', menuPath: '' },
            { menuNm: 'NHN ENTERTAINMENT', menuPath: '' },
          ]
        },
        // {menuNm: 'INTRODUCE', menuClassNm: 'introduce', menuPath: this.$routerPath.INTRODUCE},
      ]
    }
  }
}
</script>
<style scoped>
.gnb_ksm{float:right}
.list_gnb{padding-right:20px}
.list_gnb .item_gnb{display:inline-block;position:relative;vertical-align:top}
.list_gnb .link_gnb{display:block;width:100px;padding:20px 0 19px;font-size:15px;line-height:20px;color:#19BD9B;text-align:center}
.list_gnb .item_gnb.on .link_gnb{font-weight:bold;background-color:#19BD9B;color:#fff}
.list_gnb .item_gnb.on .snb_ksm{display:block}

.snb_ksm{display:none;position:absolute;right:0}
.snb_ksm:after{position:fixed;top:60px;left:0;right:0;z-index:-1;height:40px;border-bottom:1px solid #e1e1e1;background-color:#f2fffc;content:''}
.list_snb{white-space:nowrap}
.list_snb li{display:inline-block;font-size:14px;vertical-align:top}
.list_snb .link_snb{display:block;padding:10px 14px 9px;color:#888}
</style>