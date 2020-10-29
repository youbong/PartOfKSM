import { mapState } from 'vuex';
import { CHANGE_SUB_MENU_ACTION } from '@/store';

const scrolled = {
  mounted(){
    this.bindEventResize();
    this.bindEventScroll();
    window.addEventListener('resize', this.onResize);
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy(){
    window.addEventListener('resize', this.onResize);
    window.addEventListener('scroll', this.onScroll);
  },
  updated(){
    this.bindEventScroll();
  },
  data(){
    return{
      onSectionNm: '',
      sectionValueList: [],
      sectionsTop: [],
    }
  },
  computed:{
    ...mapState({
      subMenuId: state => state.common.subMenuId,
    }),
  },
  watch:{
    subMenuId(){
      const winT = window.scrollY;
      // 스크롤 이동해서 활성화된 메뉴 말고 snb 클릭으로 활성화되었을때
      if(this.subMenuId != this.onSectionNm){
        this.setSectionOn(this.subMenuId);
      }else if(winT !== this.sectionValueList[this.subMenuId]){ // 해당영역에있는 snb 클릭시 해당 영역의 top으로
        this.setSectionOn(this.subMenuId);
      }
    },
    onSectionNm(){ // 스크롤 올라간 영역 snb 메뉴 활성화
      this.$store.dispatch(CHANGE_SUB_MENU_ACTION,this.onSectionNm);
    }
  },
  methods:{
    sectionClassOn( sectionId ){
      if(sectionId == this.subMenuId){
        return 'on';
      }
      return '';
    },
    setSectionOn( targetId ){
      if(!targetId || !this.sectionValueList) return;
      const goToTop = this.sectionValueList.find(item => item[targetId]);
      window.scrollTo( 0, goToTop[targetId] );
    },
    bindEventScroll(){
      if(!this.sectionValueList) return;
      const winT = window.scrollY;
      const sectionLength = this.sectionValueList.length;

      if(winT < this.sectionsTop[1]){ // 첫번째 항목 영역
        this.onSectionNm = this.getObjectKey(0);
      }else if(winT > this.sectionsTop[sectionLength-1]){ // 마지막 항목 영역
        this.onSectionNm = this.getObjectKey(sectionLength-1);
      }else{ // 중간 항목 영역들
        this.sectionsTop.find((item,index)=>{
          if(item <= winT && this.sectionsTop[index+1] > winT){
            this.onSectionNm = this.getObjectKey(index);
          }
        });
      }
    },
    bindEventResize(){
      this.sectionsTop = Object.values(this.$refs).map(item => item.offsetTop - 120);
      for (const [key, value] of Object.entries(this.$refs)) {
        var obj = {};
        obj[key] = value.offsetTop - 120;
        this.sectionValueList.push(obj);
      }
    },
    getObjectKey( index ){
      return Object.keys(this.sectionValueList[index])[0];
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