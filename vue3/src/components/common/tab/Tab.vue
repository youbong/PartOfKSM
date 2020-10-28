<template>
  <div class="tab_comm">
    <ul class="list_tab">
      <li v-for="( itme, index ) in subMenuData" :key="index">
        <a href="#none" class="link_tab">{{ itme.menuNm }}</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Tab',
  props: {
    subMenuData: Array
  }
}
</script>
<style></style>