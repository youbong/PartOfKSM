<template>
  <li>
    <button type="button" class="btn_project" @click="$emit('onClickProjectPop',itemData.id)">
      <div class="thumb_project">
        <img :src="'https://remain.ashlab.synology.me/ksm/'+itemData.img" class="img_g" alt="">
      </div>
      <strong class="tit_project">{{ itemData.title }}</strong>
      <p class="desc_project">{{ itemData.desc }}</p>
    </button>
  </li>
</template>

<script>
export default{
  name: 'ProjectListItem',
  props: {
    itemData: Object,
  }
}
</script>
<style scoped>
.btn_project{display:block;width:100%;max-width:270px;margin:0 auto;padding:0 8px;text-align:left}
.thumb_project{overflow:hidden;position:relative;padding-top:64.6%;border:1px solid #e1e1e1;background-color:#fff}
/* .thumb_project .img_g{width:100%} */
.thumb_project .img_g{position:absolute;top:0;bottom:0;left:0;right:0;width:100%}
.tit_project,
.desc_project{overflow:hidden;letter-spacing:-.05em;white-space:nowrap;text-overflow:ellipsis}
.tit_project{display:block;margin-top:10px;font-weight:normal;font-size:15px;line-height:18px}
.desc_project{margin-top:4px;font-size:13px;line-height:18px}
</style>