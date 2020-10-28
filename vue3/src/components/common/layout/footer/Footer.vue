<template>
  <div id="KsmFoot" class="foot_ksm">
    <div class="inner_foot">
      <ul class="list_contact">
        <li>
          <a href="#none" class="link_contact" title="카카오톡 오픈채팅으로 연락하기">
            <span class="ico_ksm ico_kakaotalk">카카오톡 오픈채팅으로 연락하기</span>
          </a>
        </li>
        <li>
          <a href="#none" class="link_contact" title="페이스북으로 연락하기">
            <span class="ico_ksm ico_facebook">페이스북으로 연락하기</span>
          </a>
        </li>
        <li>
          <a href="#none" class="link_contact" title="이메일로 연락하기">
            <span class="ico_ksm ico_mail">이메일로 연락하기</span>
          </a>
        </li>
      </ul>
      <small class="copy_foot">© All rights reserved | Kim Seung Min</small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>
<style scoped>
.foot_ksm .inner_foot{overflow:hidden;max-width:1000px;margin:0 auto;padding:30px 20px 30px;box-sizing:border-box}
.foot_ksm .list_contact{overflow:hidden;text-align:center}
.foot_ksm .list_contact li{display:inline-block;vertical-align:top}
.foot_ksm .list_contact li + li{margin-left:8px}
.foot_ksm .list_contact .link_contact{display:block}
.foot_ksm .copy_foot{display:block;padding-top:30px;font-size:14px;line-height:18px;color:#888;text-align:center}
/* pc */
/* @media all and (min-width:1000px){ 
  .foot_ksm{background-color:#fafffe}
} */
@media all and (min-width:800px){ /* pc  */
  .foot_ksm .list_contact{float:right}
  .foot_ksm .copy_foot{float:left;padding-top:12px}
}
</style>