<template>
  <div class="wrap_intro">
    <h1 class="screen_out">유보현 포트폴리오</h1>
    <h2 class="screen_out">메뉴 리스트</h2>
    <nav class="area_intro">
      <ul class="list_intro">
        <li v-for="(item,index) in menuList" :key="index" :class="'item_intro item_'+item.menuClassNm">
          <router-link :to='item.menuPath' class="link_intro">
            <div class="inner_item">
              <span class="txt_intro">설명문구가 들어갑니다</span>
              <strong class="tit_intro">{{ item.menuNm }}</strong>
            </div>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  data(){
    return{
      menuList:[
        {menuNm: 'PROFILE', menuClassNm: 'porofile', menuPath: this.$routerPath.PROFILE},
        {menuNm: 'PROJECT', menuClassNm: 'project', menuPath: this.$routerPath.PROJECT},
        {menuNm: 'INTRODUCE', menuClassNm: 'introduce', menuPath: this.$routerPath.INTRODUCE},
      ]
    }
  }
}
</script>
<style scope>
html,body,#app,.wrap_intro,.area_intro,.list_intro{height:100%}

.list_intro{overflow:hidden}
.list_intro .item_intro{float:left;width:33.333%;height:100%;}
.list_intro .link_intro{display:block;height:100%;font-size:0;white-space:nowrap;text-align:center;background-color:#99e8ff}
.list_intro .link_intro:after{display:inline-block;height:100%;vertical-align:middle;content:''}
.list_intro .link_intro .inner_item{display:inline-block;vertical-align:middle;white-space:normal}
.txt_intro{display:block;font-size:10px;line-height:15px;color:#4b808e}
.tit_intro{display:block;font-size:20px;line-height:25px;color:#42555a}
</style>