<template>
  <div id="KsmContent" class="cont_ksm">
    <div id="mArticle">
      <slot/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Content',
}
</script>
<style scoped>
.cont_ksm{min-height:calc(100vh - 90px);padding-top:100px;box-sizing:border-box}/* 전체높이 - 푸터 높이 */
.cont_ksm #mArticle > .section_comm{max-width:1000px;margin:0 auto;box-sizing:border-box}
</style>