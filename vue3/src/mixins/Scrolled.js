const scrolled = {
  mounted(){
    this.bindEventScroll();
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy(){
    window.addEventListener('scroll', this.onScroll);
  },
  updated(){
    this.bindEventScroll();
  },
  data(){
    return{
      onSectionNm: ''
    }
  },
  methods: {
    bindEventScroll(){
      const winT = window.scrollY;
      var keys = [];
      var sectionsTop = [];
      var result = '';
      for (const [key, value] of Object.entries(this.$refs)) {
        keys.push(key);
        if(!value || !value.offsetTop) return;
        sectionsTop.push(value.offsetTop-120);
      }
      sectionsTop.forEach(function(item,index){
        if(winT >= 0 && winT < sectionsTop[0]){
          result = keys[0];
        }else if(index == sectionsTop.length -1 && winT > sectionsTop[sectionsTop.length -1]){
          result = keys[sectionsTop.length -1];
        }else if(item <= winT && sectionsTop[index+1] > winT){
          result = keys[index];
        }
      });
      this.onSectionNm = result;
    },
    onScroll() {
      this.bindEventScroll();
    }
  }
}
export default scrolled;