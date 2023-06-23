import { LangEnum } from 'src/utils/enum/langEnum'

export interface GeneralStateInterface {
  isGeneralLoading: boolean;
  lang: LangEnum;
}

const state: GeneralStateInterface = {
  isGeneralLoading: true,
  lang: LangEnum.ENG
}

export default state
