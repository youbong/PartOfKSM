<template>
  <PageWithLayout>
    <div class="section_comm">
      <h2 class="screen_out">프로젝트</h2>
      <ul class="list_project">
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
      @onClickPrevPop="onClickPrevPop"
      @onClickNextPop="onClickNextPop"
      @onClickClosePop="onClickCloseProjectPop"/>
  </PageWithLayout>
</template>

<script>
import PageWithLayout from '@/components/common/layout/PageWithLayout';
import ProjectListItem from '@/components/project/ProjectListItem';
import ProjectDetailPopup from '@/components/project/ProjectDetailPopup';

import { mapState } from 'vuex';
import { projectData } from '@/constants/project/projectData';
import { projectDetailData } from '@/constants/project/projectDetailData';

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
      projectDetailItemData: {},
    }
  },
  computed: {
    ...mapState({
      subMenuId: state => state.common.subMenuId,
    }),
    projectData(){
      const dataList = projectData.sort((a, b) =>  b.id - a.id);
      if(!this.subMenuId || this.subMenuId == 'All'){
        return dataList;
      }else{
        const result = dataList.filter(item => item.catagory == this.subMenuId);
        return result;
      }
    },
  },
  methods: {
    onClickProjectPop( selectedId ){
      // this.projectDetailItemData = projectDetailData.filter(item => item.id == selectedId)[0];
      this.setProjectDetailData( selectedId );
      this.isProjectDetailPop = true;
    },
    onClickPrevPop(){
      const nowIndex = this.projectDetailItemData.id;
      if(this.projectData.length == nowIndex){
        this.setProjectDetailData( 1 );
      }else{
        this.setProjectDetailData( nowIndex+1 );
      }
    },
    onClickNextPop(){
      const nowIndex = this.projectDetailItemData.id;
      if(nowIndex == 1){
        this.setProjectDetailData( this.projectData.length );
      }else{
        this.setProjectDetailData( nowIndex-1 );
      }
    },
    setProjectDetailData( id ){
      this.projectDetailItemData =  projectDetailData.find(item => item.id == id);
    },
    onClickCloseProjectPop(){
      this.projectDetailItemData = {};
      this.isProjectDetailPop = false;
    }
  }
}
</script>
<style scoped>
.section_comm{padding:40px 12px 30px}

.list_project{overflow:hidden}
.list_project >>> li{float:left;width:25%;margin-bottom:30px}

@media all and (max-width:800px){
  .list_project >>> li{width:33.333%}
}
@media all and (max-width:600px){
  .list_project >>> li{width:50%}
}
</style>