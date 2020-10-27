<template>
  <div class="project_layer">
    <div class="inner_layer_project">
      <div class="dimmed_layer" @click="$emit('onClickClosePop')"></div>
      <div class="area_layer">
        <div class="layer_head">
          <strong class="tit_layer">{{ itemData.title }}</strong>
          <span class="txt_company">worked in {{ itemData.companyNm }}</span>
        </div>
        <div class="layer_body">
          <dl class="list_dictionary">
            <dt class="tit_point">회사정보</dt>
            <dd>{{ itemData.companyNm }}</dd>
          </dl>
          <dl v-if="itemData.job" class="list_dictionary">
            <dt class="tit_point">주요업무내용</dt>
            <dd>{{ itemData.job }}</dd>
          </dl>
          <dl v-if="itemData.date" class="list_dictionary">
            <dt class="tit_point">근무기간</dt>
            <dd>{{ itemData.date }}</dd>
          </dl>
          <dl v-if="itemData.aim" class="list_dictionary">
            <dt class="tit_point">목표</dt>
            <dd>{{ itemData.aim }}</dd>
          </dl>
          <dl v-if="itemData.orientation" class="list_dictionary">
            <dt class="tit_point">설계방향성</dt>
            <dd>{{ itemData.orientation }}</dd>
          </dl>
          <dl v-if="itemData.reference" class="list_dictionary">
            <dt class="tit_point">참고기술</dt>
            <dd><a :href="itemData.reference" class="link_g" target="_blank">{{ itemData.reference }}</a></dd>
          </dl>
          <dl v-if="itemData.jobDetialDataList" class="list_dictionary">
            <dt class="tit_point">진행업무</dt>
            <dd>
              <ul class="list_dot">
                <li v-for="( item, index ) in itemData.jobDetialDataList" :key="index">{{ item }}</li>
              </ul>
            </dd>
          </dl>
          <dl v-if="itemData.resultDataList" class="list_dictionary">
            <dt class="tit_point">결과</dt>
            <dd>
              <ul class="list_dot">
                <li v-for="( item, index ) in itemData.resultDataList" :key="index">{{ item }}</li>
              </ul>
            </dd>
          </dl>
          <dl v-if="itemData.pageUrl" class="list_dictionary">
            <dt class="tit_point">페이지</dt>
            <dd><a :href="itemData.pageUrl" class="link_g" target="_blank">{{ itemData.pageUrl }}</a></dd>
          </dl>
          <div v-if="itemData.img" class="thumb_layer">
            <img :src="'https://remain.ashlab.synology.me/ksm/'+itemData.img" class="img_g" alt="">
          </div>
        </div>
        <div class="layer_foot">
          <button type="button" class="btn_close" @click="$emit('onClickClosePop')">닫기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'ProjectDetailPopup',
  props: {
    itemData: Object,
  }
}
</script>
<style scoped>
.project_layer{position:fixed;top:0;bottom:0;left:0;right:0;z-index:210;padding:40px}
.dimmed_layer{position:fixed;top:0;left:0;z-index:200;width:100%;height:100%;background-color:rgba(0,0,0,.4)}

.project_layer{font-size:0;text-align:center;white-space:nowrap}
.project_layer:after{display:inline-block;height:100%;vertical-align:middle;content:''}
.inner_layer_project{display:inline-block;max-width:838px;max-height:100%;vertical-align:middle;white-space:normal}
.area_layer{position:relative;z-index:210;padding:30px;background-color:#fff;text-align:left}

.layer_head{padding-bottom:8px;border-bottom:1px solid #222}
.layer_head .tit_layer{display:block;font-weight:normal;font-size:22px}
.layer_head .txt_company{display:block;font-size:12px;line-height:14px;text-align:right}

/* 전체에서 - project_layer 여백 - area_layer 여백 - layer_head 높이 - layer_foot 높이 - layer_body여백 */
.layer_body{overflow-x:hidden;overflow-y:auto;height:calc(100vh - 80px - 60px - 56px - 62px - 20px);max-height:630px;margin-top:20px}
.layer_body dt,
.layer_body dd{font-size:13px;line-height:18px}
.layer_body .thumb_layer{margin-top:20px;border:1px solid #e1e1e1}
.layer_body .thumb_layer .img_g{width:100%}

.layer_foot{margin-top:30px;text-align:center}
.layer_foot .btn_close{display:inline-block;min-width:104px;height:32px;padding:6px 16px 8px;border-radius:2px;border:1px solid #bbb;font-weight:normal;font-size:12px;line-height:18px;background-color:#fff;color:#555;vertical-align:top}
</style>