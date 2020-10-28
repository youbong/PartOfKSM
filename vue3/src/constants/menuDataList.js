import routerPath from '@/router/routerPath'

export const menuDataList = [
  {
    menuNm: 'PROFILE',
    menuClassNm: 'porofile',
    menuPath: routerPath.PROFILE,
    subMenuData: [
      { menuNm: 'INFO', menuId: 'Info' },
      { menuNm: 'SKILL', menuId: 'Skill' },
      { menuNm: 'EXPRIENCE', menuId: 'Exprience' },
      { menuNm: 'COVERLETTER', menuId: 'CoverLetter' },
    ]
  },
  {
    menuNm: 'PROJECT',
    menuClassNm: 'project',
    menuPath: routerPath.PROJECT,
    subMenuData: [
      { menuNm: 'All', menuId: 'All' },
      { menuNm: '디케이테크인', menuId: 'DkTechin' },
      { menuNm: '싸이월드', menuId: 'Cyworld' },
      { menuNm: '주식회사 리메인', menuId: 'Remain' },
      { menuNm: '한빛소프트', menuId: 'HanbitSoft' },
      { menuNm: 'NHN ENTERTAINMENT', menuId: 'Nhn' },
    ]
  },
]