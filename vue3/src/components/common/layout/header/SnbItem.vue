<template>
  <li :class="subMenuId && subItemData.menuId == subMenuId ? 'on' : ''">
    <button type="button" class="link_snb" @click="$emit('onClickSubMenu',subItemData.menuId)">{{ subItemData.menuNm }}</button>
  </li>
</template>

<script>
export default {
  name: 'SnbItem',
  props:{
    subItemData : Object,
    subMenuId: String,
  },
}
</script>