import { LangEnum } from 'src/utils/enum/langEnum'

export interface GeneralStateInterface {
  isGeneralLoading: boolean;
  lang: LangEnum;
  isShowPopupContactUs: boolean;
}

const state: GeneralStateInterface = {
  isGeneralLoading: true,
  lang: LangEnum.ENG,
  isShowPopupContactUs: false
}

export default state
