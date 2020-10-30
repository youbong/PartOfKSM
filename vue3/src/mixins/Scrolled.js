import { mapState } from 'vuex';
import { CHANGE_SUB_MENU_ACTION } from '@/store';

const scrolled = {
  mounted(){
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('scroll', this.onScroll);


    if(this.$route.name == 'profile') {
      window.addEventListener('resize', this.onResize);
      window.addEventListener('scroll', this.onScroll);
      this.bindEventResize();
    }
  },
  beforeDestroy(){
    if(this.$route.name != 'profile') {
      window.removeEventListener('resize', this.onResize);
      window.removeEventListener('scroll', this.onScroll);
    }
  },
  data(){
    return{
      onSectionNm: '',
      sectionValueList: [],
    }
  },
  computed:{
    ...mapState({
      subMenuId: state => state.common.subMenuId,
    }),
  },
  watch:{
    subMenuId(){
      // snb 클릭으로 활성화되었을때
      if(this.$route.name != 'profile') return;
      if(this.subMenuId == this.onSectionNm) return;
      this.onSectionNm = this.subMenuId;
      this.setScrollAreaTop(this.subMenuId);
    },
  },
  methods:{
    bindEventScroll(){
      if(this.sectionValueList.length == 0) return;
      const winT = window.scrollY;
      const sectionLength = this.sectionValueList.length;
      if(winT > this.getTopByIndex( sectionLength - 1 )){ // 마지막 항목 영역
        this.onSectionNm = this.getMenuNmByIndex(sectionLength-1);
        this.$store.dispatch(CHANGE_SUB_MENU_ACTION,this.onSectionNm);
        return;

      }else{
        this.sectionValueList.find((item,index)=>{
          if(index == sectionLength - 1) return;
          if(item.top <= winT && this.getTopByIndex( index+1 ) > winT){
            this.onSectionNm = this.getMenuNmByIndex(index);
            this.$store.dispatch(CHANGE_SUB_MENU_ACTION,this.onSectionNm);
          }
        });
        return;
      }
    },
    bindEventResize(){
      if(this.sectionValueList){
        this.sectionValueList = [];
      }
      for (const [key, value] of Object.entries(this.$refs)) {
        if(!value) return;
        var obj = {};
        obj.menuNm = key;
        obj.top = value.offsetTop - 120;
        this.sectionValueList.push(obj);
      }
      this.sectionValueList[0].top = 0;
    },
    getMenuNmByIndex( index ){
      return this.sectionValueList[index].menuNm;
    },
    getTopById( id ){
      return this.sectionValueList.find(item => item.menuNm == id).top;
    },
    getTopByIndex( index ){
      return this.sectionValueList[index].top;
    },
    setScrollAreaTop( targetId ){
      if(!targetId || !this.sectionValueList) return;
      const goToTop = this.getTopById( targetId );
      window.scrollTo( 0, goToTop );
    },
    onScroll() {
      this.bindEventScroll();
    },
    onResize(){
      this.bindEventResize();
    }
  }
}
export default scrolled;