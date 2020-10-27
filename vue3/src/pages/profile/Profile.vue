<template>
  <PageWithLayout>
    <h2 class="screen_out">프로필</h2>
    <div class="profile_item profile_info">
      <dl>
        <dt>Name</dt>
        <dd>김승민</dd>
      </dl>
      <dl>
        <dt>Birth</dt>
        <dd>1991.03.17</dd>
      </dl>
      <dl>
        <dt>Phone</dt>
        <dd>010-3474-7123</dd>
      </dl>
      <dl>
        <dt>E-Mail</dt>
        <dd>kimtmdals@naver.com</dd>
      </dl>
      <dl>
        <dt>Address</dt>
        <dd>경기도 용인시 신갈동</dd>
      </dl>
      <dl>
        <dt>Recent Company Information</dt>
        <dd>공동체 내 전반적인 사내 그룹웨어 시스템 플랫폼 개발</dd>
      </dl>
      <dl>
        <dt>Performance</dt>
        <dd v-for="( item, index ) in performanceDataList" :key="index">
          <span class="tit_performance">{{ item.performanceType }}</span>
          <ul class="list_performance">
            <li v-for="( skillItem, index ) in item.skillData" :key="index">{{ skillItem.skillNm }} ({{ skillItem.skillPont }})</li>
          </ul>
        </dd>
      </dl>
      <dl>
        <dt>Skill & Summary</dt>
        <dd>
          <ul class="list_summary">
            <li v-for="( item, index ) in performanceSummaryData" :key="index">{{ item }}</li>
          </ul>
        </dd>
      </dl>
      <dl>
        <dt>Professional Exprience</dt>
        <dd>
          <ul class="list_history">
            <li v-for="(item, index) in historyDataList" :key="index">
              <div class="history_head">
                <strong class="tit_history">{{ item.companyNm }}</strong>
                <span class="date_histroy">근무기간: {{ item.date }}</span>
                <p class="desc_history">주요업무: {{ item.job }}</p>
                <p class="desc_history">퇴사사유: {{ item.turnoverReasons }}</p>
              </div>
              <div class="history_body">
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
                      <col style="width:150px">
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
                      <tr v-for="( jobItem, index ) in item.jobDataList" :key="index">
                        <td v-html="jobItem.catagory"></td>
                        <td v-html="jobItem.jobDesc"></td>
                        <td v-html="jobItem.participationRate" class="align_center"></td>
                      </tr>
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
                      <col style="width:150px">
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
              </div>
            </li>
          </ul>
        </dd>
      </dl>
      <dl>
        <dt>Cover Letter</dt>
        <dd>
          <p class="area_cover_letter" v-html="coverLetterData"></p>
        </dd>
      </dl>
    </div>
    <div class="profile_item profile_contact">
      <h3 class="screen_out">연락하기</h3>
      <a href="https://open.kakao.com/o/s5J8sZV" class="link_contact" target="_blank">카카오톡 오픈채팅 CONTACT</a>
    </div>
  </PageWithLayout>
</template>

<script>
import PageWithLayout from '@/components/common/layout/PageWithLayout';
import historyDataList from '@/constants/profileHistoryData';
import { performanceDataList, performanceSummaryData } from '@/constants/profilePerformanceData';
import { coverLetterData } from '@/constants/profileCoverLetter';

export default {
  name: 'Profile',
  components:{
    PageWithLayout
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
    }
  }
}
</script>
<style scoped>
.profile_item + .profile_item{margin-top:40px}

.profile_info dl + dl{margin-top:20px}
.profile_info dt{display:inline-block;margin-bottom:8px;font-size:14px;line-height:16px;color:#222;vertical-align:top}
.profile_info dt:after{display:block;height:8px;margin:-10px -4px 0;border-radius:4px;background-color:rgba(25,189,155,.15);content:''}
.profile_info dd{display:block;font-size:15px;line-height:20px;color:#222}
.profile_info dd + dd{margin-top:12px}

/* 퍼포먼스 */
.profile_info .tit_performance{display:block;font-size:12px;line-height:14px}
.profile_info .list_performance li{display:inline-block;margin:6px 6px 0 0;padding:2px 10px;border-radius:2px;font-size:14px;background-color:#eee;vertical-align:top}

/* 설명 리스트 */
.profile_info .list_summary li{position:relative;padding-left:10px;font-size:14px;line-height:20px}
.profile_info .list_summary li:after{position:absolute;top:8px;left:0;width:2px;height:2px;background-color:#555;content:''}

/* 히스토리 */
.profile_info .list_history{overflow:hidden}
.profile_info .list_history li + li{margin-top:15px}
.profile_info .list_history .tit_history{display:block;margin-bottom:4px;font-size:14px}
.profile_info .list_history .date_histroy{display:block;font-size:12px;line-height:18px}
.profile_info .list_history .desc_history{font-size:12px}

/* 자기소개서 */
.profile_info .area_cover_letter{font-size:13px;line-height:18px}

.profile_contact .link_contact{display:block;width:150px;margin:0 auto;padding:12px 10px 10px;background-color:#19BD9B;border-radius:2px;font-weight:bold;font-size:13px;line-height:15px;color:#fff;text-align:center}
</style>