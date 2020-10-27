<template>
  <div id="KsmContent" class="cont_ksm">
    <div id="mArticle">
      <div class="section_comm">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content',
}
</script>
<style scoped>
.cont_ksm{min-height:calc(100vh - 60px - 55px);padding:30px 20px;box-sizing:border-box}
</style>