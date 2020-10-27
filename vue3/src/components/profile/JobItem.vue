<template>
  <tr>
    <td :rowspan="!isRowSpan && rowspanCount ? rowspanCount : 1" v-if="!isRowSpan" v-html="itemData.catagory"></td>
    <td v-html="itemData.jobDesc"></td>
    <td v-html="itemData.participationRate" class="align_center"></td>
  </tr>
</template>

<script>
export default{
  name: 'JobItem',
  props: {
    itemData: Object,
    isRowSpan: Boolean,
    rowspanCount: Number
  }
}
</script>