import { LangEnum } from 'src/utils/enum/langEnum'

export interface GeneralStateInterface {
  isGeneralLoading: boolean;
  lang: LangEnum;
  isShowPopupContactUs: boolean;
}

const state: GeneralStateInterface = {
  isGeneralLoading: true,
  lang: LangEnum.ENG
  isGeneralLoading: true,
  isShowPopupContactUs: false
}

export default state
