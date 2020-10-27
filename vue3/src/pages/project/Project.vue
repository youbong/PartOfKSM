<template>
  <PageWithLayout>
    <h2 class="screen_out">프로젝트</h2>
    <ul class="list_project_menu">
      <li v-for="(item,index) in projectMenuList" :key="index">
        <router-link :to="item.menuPath" class="link_menu">
          <!-- <p class="desc_menu">{{ item.menuDesc }}</p> -->
          <!-- <span class="txt_menu">{{ item.menuNm }}</span> -->
          {{ item.menuNm }}
        </router-link>
      </li>
    </ul>
  </PageWithLayout>
</template>

<script>
import PageWithLayout from '@/components/common/layout/PageWithLayout';

export default {
  name: 'Project',
  components:{
    PageWithLayout
  },
  data(){
    return{
      projectMenuList:[
        {menuNm: 'All', menuPath: this.$routerPath.PROJECT},
        {menuNm: '디케이테크인', menuPath: this.$routerPath.PROJECT},
        {menuNm: '싸이월드', menuPath: this.$routerPath.PROJECT},
        {menuNm: '주식회사 리메인', menuPath: this.$routerPath.PROJECT},
        {menuNm: '한빛소프트', menuPath: this.$routerPath.PROJECT},
        {menuNm: 'NHN ENTERTAINMENT', menuPath: this.$routerPath.PROJECT},
      ]
    }
  }
}
</script>
<style scoped>
/* .list_project_menu li + li{margin-top:20px} */
.list_project_menu li{display:inline-block;vertical-align:top}
.list_project_menu .link_menu{display:block;padding:5px 10px;font-size:14px;}
/* .list_project_menu .desc_menu{font-size:12px;line-height:16px;color:#555}
.list_project_menu .txt_menu{display:block;font-size:15px;line-height:18px;color:#222} */
</style>