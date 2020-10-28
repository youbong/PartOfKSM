const path = require('path')

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/static/' : '/',
    outputDir: path.resolve(__dirname, '../../portfolio/static'),
//    20201028 검토 사항
//    index.html -> css 경로 : static/assets/css/common.css
//    public assets image 는 common.css 에서 사용하는 이미지만
//    나머지 코드 내 사용 이미지는 src/assets/images 하위에 위치
//    코드 내 사용 이미지는 @/assets/images/ ~~ 로 적용
}
