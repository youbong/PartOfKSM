<template>
  <div id="KsmWrap" class="wrap_ksm">
    <Header />
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
export default {
  name: 'PageWithLayout',
  components: {
    Header,
    Content,
    Footer
  },
  // mounted(){
  //   this.setHeadSection();
  //   this.setBodySection();
  //   this.setBodyRight();
  // },
  // data(){
  //   return{
  //     isHeadSection: false,
  //     isBodySection: false,
  //     isBodyRight: false,
  //     bodyRightType:''
  //   }
  // },
  // methods: {
  //   setHeadSection(){
  //     const checkSlot = Boolean(this.$slots['headSection']);
  //     // console.log('setHeadSection',checkSlot);
  //     this.isHeadSection = checkSlot;
  //   },
  //   setBodySection(){
  //     const checkSlot = Boolean(this.$slots['bodySection']);
  //     // console.log('setBodySection',checkSlot);
  //     this.isBodySection = checkSlot;
  //   },
  //   setBodyRight(){
  //     const checkSlot = Boolean(this.$slots['bodyRight']);
  //     // console.log('setBodyRight',checkSlot);
  //     this.isBodyRight = checkSlot;
  //     this.bodyRightType = this.isBodyRight ? this.$slots['bodyRight'][0].componentOptions.tag:'';
  //   },
  // }
}
</script>
