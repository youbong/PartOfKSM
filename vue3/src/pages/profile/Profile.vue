<template>
  <PageWithLayout>
    <div class="section_comm">
      <h2 class="screen_out">프로필( INFO / SKILL / EXPRIENCE / COVERLETTER )</h2>
      <!-- <nav class="nav_profile_menu">
        <ul class="list_menu">
          <li>
            <button class="btn_menu">INFO</button>
          </li>
          <li>
            <button class="btn_menu">SKILL</button>
          </li>
          <li>
            <button class="btn_menu">EXPRIENCE</button>
          </li>
          <li>
            <button class="btn_menu">COVER<br>LETTER</button>
          </li>
        </ul>
      </nav> -->
      <div class="profile_item profile_info">
        <h3 class="tit_profile">INFO</h3>
        <dl class="list_dictionary">
          <dt class="tit_point">Name</dt>
          <dd>김승민</dd>
        </dl>
        <dl class="list_dictionary">
          <dt class="tit_point">Birth</dt>
          <dd>1991.03.17</dd>
        </dl>
        <dl class="list_dictionary">
          <dt class="tit_point">Phone</dt>
          <dd>010-3474-7123</dd>
        </dl>
        <dl class="list_dictionary">
          <dt class="tit_point">E-Mail</dt>
          <dd>kimtmdals@naver.com</dd>
        </dl>
        <dl class="list_dictionary">
          <dt class="tit_point">Address</dt>
          <dd>경기도 용인시 신갈동</dd>
        </dl>
        <dl class="list_dictionary">
          <dt class="tit_point">Recent Company Information</dt>
          <dd>공동체 내 전반적인 사내 그룹웨어 시스템 플랫폼 개발</dd>
        </dl>
      </div>
      <div class="profile_item profile_skill">
        <h3 class="tit_profile">SKILL</h3>
        <dl class="list_detail">
          <dt class="tit_point">Performance</dt>
          <dd v-for="( item, index ) in performanceDataList" :key="index">
            <span class="tit_performance">{{ item.performanceType }}</span>
            <ul class="list_performance">
              <li v-for="( skillItem, index ) in item.skillData" :key="index">{{ skillItem.skillNm }} ({{ skillItem.skillPont }})<span :class="['ico_ksm',skillPointStar(skillItem.skillPont)]"></span></li>
            </ul>
          </dd>
        </dl>
        <dl class="list_detail">
          <dt class="tit_point">Skill & Summary</dt>
          <dd>
            <ul class="list_dot">
              <li v-for="( item, index ) in performanceSummaryData" :key="index">{{ item }}</li>
            </ul>
          </dd>
        </dl>
      </div>
      <div class="profile_item profile_exprience">
        <h3 class="tit_profile">EXPRIENCE</h3>
        <ul class="list_exprience">
          <li v-for="(item, index) in historyDataList" :key="index">
            <strong class="tit_point">{{ item.companyNm }}</strong>
            <dl class="list_basic">
              <dt>근무기간</dt>
              <dd>{{ item.date }}</dd>
              <dt>주요업무</dt>
              <dd>{{ item.job }}</dd>
              <dt>퇴사사유</dt>
              <dd>{{ item.turnoverReasons }}</dd>
            </dl>
            <div class="tbl_head">
              <div class="area_left">
                <strong class="tit_head">진행 업무 상세</strong>
              </div>
              <div class="area_right">
                <p class="desc_tip">상시 업무의 경우 참여율 미 표기</p>
              </div>
            </div>
            <div class="tbl_comm tbl_view">
              <table>
                <colgroup>
                  <col style="width:200px">
                  <col>
                  <col style="width:100px">
                </colgroup>
                <thead>
                  <tr>
                    <th>구분</th>
                    <th>진행 업무</th>
                    <th class="align_center">참여율 (%)</th>
                  </tr>
                </thead>
                <tbody>
                  <JobItem
                    v-for="( jobItem, index ) in item.jobDataList"
                    :key="index"
                    :isRowSpan="isRowSpan(item.jobDataList, jobItem, index, 'catagory')"
                    :rowspanCount="rowspanCount(item.jobDataList, jobItem, index, 'catagory')"
                    :itemData="jobItem" />
                </tbody>
              </table>
            </div>
            <div v-if="item.projectDataList" class="tbl_head">
              <div class="area_left">
                <strong class="tit_head">진행 프로젝트 상세</strong>
              </div>
            </div>
            <div v-if="item.projectDataList" class="tbl_comm tbl_view">
              <table>
                <colgroup>
                  <col style="width:200px">
                  <col>
                </colgroup>
                <thead>
                  <tr>
                    <th>진행 프로젝트 명</th>
                    <th>개요</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="( projectItem, index ) in item.projectDataList" :key="index">
                    <td v-html="projectItem.projectNm"></td>
                    <td v-html="projectItem.projectDesc"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
        </ul>
      </div>
      <div class="profile_item profile_coverletter">
        <h3 class="tit_profile">COVERLETTER</h3>
        <CoverLetter />
      </div>
      <div class="profile_item profile_contact">
        <h3 class="screen_out">연락하기</h3>
        <a href="https://open.kakao.com/o/s5J8sZV" class="link_contact" target="_blank">카카오톡 오픈채팅 CONTACT</a>
      </div>
    </div>
  </PageWithLayout>
</template>

<script>
import PageWithLayout from '@/components/common/layout/PageWithLayout';
import JobItem from '@/components/profile/JobItem';
import CoverLetter from '@/components/profile/CoverLetter';

import { historyDataList } from '@/constants/profileHistoryData';
import { performanceDataList, performanceSummaryData } from '@/constants/profilePerformanceData';
import { coverLetterData } from '@/constants/profileCoverLetter';

export default {
  name: 'Profile',
  components:{
    PageWithLayout,
    JobItem,
    CoverLetter
  },
  computed: {
    historyDataList(){
      return historyDataList;
    },
    performanceDataList(){
      return performanceDataList;
    },
    performanceSummaryData(){
      return performanceSummaryData;
    },
    coverLetterData(){
      return coverLetterData;
    },
  },
  methods:{
    skillPointStar(skillPoint){
      switch (skillPoint) {
        case 'Ⅰ':
          return 'ico_star1';
        case 'Ⅱ':
          return 'ico_star2';
        case 'Ⅲ':
          return 'ico_star3';
      }
      return '';
    },
    isRowSpan(ListData, item, index, rowKey){
      return index > 0 && ListData[index-1][rowKey] == item[rowKey];
    },
    rowspanCount(ListData, item, index, rowKey){
      if(!this.isRowSpan(ListData, item, index, rowKey)){
        var result = 0;
        const targetValue = item[rowKey];
        ListData.filter( item => {
          if(targetValue == item[rowKey]){
            result += 1;
          }else{
            return;
          }
        });
        return result;
      }else{
        return null;
      }
    },
  }
}
</script>
<style scoped>
.section_comm{padding:50px 20px 30px 20px}
/* @media all and (max-width:1000px){
  .section_comm{padding:30px 90px 30px 20px}
} */

/* 메뉴 */
.nav_profile_menu{position:fixed;top:60px;bottom:55px;right:0;font-size:0;white-space:nowrap}
.nav_profile_menu:after{display:inline-block;height:100%;vertical-align:middle;content:''}
.nav_profile_menu .list_menu{display:inline-block;vertical-align:middle;white-space:normal}
.nav_profile_menu .list_menu li + li{margin-top:15px}
.nav_profile_menu .btn_menu{display:block;width:90px;padding:0 5px;font-size:14px;line-height:16px;text-align:right}

/* 항목 공통 */
/* .profile_item{background-color:#fff;box-shadow:0 5px 15px 0 rgba(0,0,0,.05);padding:30px 20px} */
.profile_item + .profile_item{margin-top:80px}

.profile_item .tit_profile{display:block;font-size:24px;line-height:26px;color:#006b55}
.profile_item .tit_profile + dl{margin-top:20px}
/* .profile_item dl{padding-left:20px} */

/* 퍼포먼스 */
.profile_item dt + dd .tit_performance{margin-top:4px}
.profile_item .tit_performance{display:block;margin-top:20px;font-size:14px;line-height:18px;color:#222}
.profile_item .list_performance{margin-top:4px}
.profile_item .list_performance li{display:inline-block;position:relative;margin:6px 6px 0 0;padding:2px 10px;border-radius:4px;background-color:#eee;vertical-align:top}
.profile_item .list_performance li .ico_ksm{position:absolute;top:-6px;left:4px}

/* 설명 리스트 */
.profile_item .list_dot{margin-top:4px}

/* 히스토리 */
.profile_item .list_exprience{margin-top:20px}
.profile_item .list_exprience li + li{margin-top:60px}
.profile_item .list_exprience .tit_point{display:inline-block;margin-bottom:25px;font-size:18px;line-height:20px;vertical-align:top}
/* .profile_item .desc_history{display:block;font-size:14px;line-height:24px} */

/* 자기소개서 */
.profile_item .area_cover_letter{padding-top:20px;font-size:14px;line-height:22px}

.profile_contact .link_contact{display:block;width:300px;margin:0 auto;padding:12px 10px 10px;background-color:#19BD9B;border-radius:2px;font-weight:bold;font-size:15px;line-height:22px;color:#fff;text-align:center}
</style>