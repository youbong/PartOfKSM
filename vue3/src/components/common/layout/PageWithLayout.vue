<template>
  <div id="KsmWrap" :class="['wrap_ksm','theme_'+themeData]">
    <Header :themeData="themeData" />
    <hr class="hide">
    <Content>
      <slot/>
      <!-- <template v-slot:headSection>
        <slot name="headSection" />
      </template>
      <template v-slot:bodySection>
        <slot name="bodySection" />
      </template>
      <template v-slot:bodyRight>
        <slot name="bodyRight" />
      </template> -->
    </Content>
    <!-- <slot name="popup" /> -->
    <hr class="hide">
    <Footer />
  </div>
</template>

<script>
import Header from './header/Header'
import Content from './content/Content'
import Footer from './footer/Footer'

import { themeData } from '@/constants/common/themeData'

export default {
  name: 'PageWithLayout',
  components: {
    Header,
    Content,
    Footer
  },
  computed: {
    themeData(){
      return themeData;
    }
  }
}
</script>
