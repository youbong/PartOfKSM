<template>
  <div id="KsmContent" :class="['cont_ksm','cont_'+$route.name]">
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
.cont_ksm{min-height:calc(100vh - 138px);padding-top:100px;box-sizing:border-box}/* 전체높이 - 푸터 높이 */
.cont_ksm #mArticle > .section_comm{max-width:1000px;margin:0 auto;box-sizing:border-box}
/* pc */
/* @media all and (min-width:1000px){ 
  .cont_ksm{background-color:#fafffe}
} */
@media all and (min-width:800px){
  .cont_ksm{min-height:calc(100vh - 90px)}
}
</style>