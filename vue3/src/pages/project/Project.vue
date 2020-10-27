<template>
  <PageWithLayout>
    <div class="section_comm">
      <h2 class="screen_out">프로젝트</h2>
      <ul class="list_project">
        <!-- <li v-for="( item, index ) in projectData" :key="index">
          <button type="button" class="btn_project">
            <div class="thumb_project">
              <img :src="'https://remain.ashlab.synology.me/ksm/'+item.img" class="img_g" alt="">
            </div>
            <strong class="tit_project">{{ item.title }}</strong>
            <p class="desc_project">{{ item.desc }}</p>
          </button>
        </li> -->
        <ProjectListItem
          v-for="( item, index ) in projectData"
          :key="index"
          :itemData="item"
          @onClickProjectPop="onClickProjectPop"/>
      </ul>
    </div>
    <ProjectDetailPopup
      v-if="isProjectDetailPop"
      :itemData="projectDetailItemData"
      @onClickClosePop="onClickCloseProjectPop"/>
  </PageWithLayout>
</template>

<script>
import PageWithLayout from '@/components/common/layout/PageWithLayout';
import ProjectListItem from '@/components/project/ProjectListItem';
import ProjectDetailPopup from '@/components/project/ProjectDetailPopup';

import { projectData } from '@/constants/projectData';
import { projectDetailData } from '@/constants/projectDetailData';

export default {
  name: 'Project',
  components: {
    PageWithLayout,
    ProjectListItem,
    ProjectDetailPopup
  },
  data(){
    return{
      isProjectDetailPop: false,
      projectDetailItemData: {}
    }
  },
  computed: {
    projectData(){
      return projectData.reverse();
    },
  },
  methods: {
    onClickProjectPop( selectedId ){
      this.projectDetailItemData = projectDetailData.filter(item => item.id == selectedId)[0];
      this.isProjectDetailPop = true;
    },
    onClickCloseProjectPop(){
      this.projectDetailItemData = {};
      this.isProjectDetailPop = false;
    }
  }
}
</script>
<style scoped>
.section_comm{padding:50px 20px 30px}

.list_project{overflow:hidden}
.list_project >>> li{float:left;width:33.333%;margin-bottom:30px}
/* .list_project >>> li:nth-child(3n-2) .btn_project{margin-left:0}
.list_project >>> li:nth-child(n+4){margin-top:30px} */
</style>