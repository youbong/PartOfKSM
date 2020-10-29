<template>
  <nav class="gnb_ksm">
    <ul class="list_gnb">
      <li v-for="(item,index) in menuDataList" :key="index" :class="['item_gnb item_'+item.menuClassNm,item.menuNm === $route.meta.menuNm ? 'on':'']">
        <router-link :to='item.menuPath' class="link_gnb">{{ item.menuNm }}</router-link>
        <div v-if="item.subMenuData" class="snb_ksm">
          <ul class="list_snb">
            <SnbItem
               v-for="( snbItem, index ) in item.subMenuData" :key="index"
              :subItemData="snbItem"
              :subMenuId="subMenuId"
              @onClickSubMenu="onClickSubMenu"/>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
import SnbItem from '@/components/common/layout/header/SnbItem';
import { mapState } from 'vuex';
import { CHANGE_SUB_MENU_ACTION } from '@/store';

import { menuDataList } from '@/constants/common/menuDataList'

export default {
  name: 'Gnb',
  components:{
    SnbItem
  },
  mounted(){
    const defaultSubMenuId = this.menuDataList.find(item => item.menuNm == this.$route.meta.menuNm).subMenuData[0].menuId || '';
    this.$store.dispatch(CHANGE_SUB_MENU_ACTION, defaultSubMenuId);
  },
  computed: {
    ...mapState({
      subMenuId: state => state.common.subMenuId,
    }),
    menuDataList(){
      return menuDataList;
    },
  },
  methods:{
    toMenu1depthPath( menu1ItemData ){
      return { name : menu1ItemData.menuClassNm };
    },
    onClickSubMenu( selectedSubMenuId ){
      this.$emit('onClickSubMenu',selectedSubMenuId);
      this.$store.dispatch(CHANGE_SUB_MENU_ACTION, selectedSubMenuId);
    }
  }
}
</script>
<style scoped>

.gnb_ksm{float:right}
.list_gnb{padding-right:20px}
.list_gnb .item_gnb{display:inline-block;vertical-align:top}
.list_gnb .link_gnb{display:block;width:100px;padding:20px 0;font-size:15px;line-height:20px;text-align:center}
.list_gnb .item_gnb.on .link_gnb{font-weight:bold;outline:none}
.list_gnb .item_gnb.on .snb_ksm{display:block}

.gnb_ksm >>> .snb_ksm{display:none;overflow-y:auto;position:absolute;left:20px;right:20px}
.gnb_ksm >>> .snb_ksm:after{position:fixed;top:60px;left:0;right:0;z-index:-1;height:40px;border-bottom:1px solid #e1e1e1;content:''}
.gnb_ksm >>> .list_snb{white-space:nowrap;text-align:right}
.gnb_ksm >>> .list_snb li{display:inline-block;vertical-align:top}
.gnb_ksm >>> .list_snb .link_snb{display:block;padding:10px 14px 9px;font-size:15px;line-height:21px;outline:none}

@media all and (max-width:800px){  /* mobile */
  .list_gnb .link_gnb{width:auto;padding:20px 10px;font-size:14px}
  .gnb_ksm >>> .snb_ksm{left:0;right:0}
  .gnb_ksm >>> .list_snb{text-align:left}
}
@media all and (max-width:1000px){
  .list_gnb{padding-right:0}
}
</style>