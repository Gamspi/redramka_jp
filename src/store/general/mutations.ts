import { MutationTree } from 'vuex'
import { GeneralStateInterface } from './state'
import { LangEnum } from 'src/utils/enum/langEnum'

const mutation: MutationTree<GeneralStateInterface> = {
  mutateIsGeneralLoading (state: GeneralStateInterface, payload: boolean): void {
    state.isGeneralLoading = payload
  },
  mutateLang (state: GeneralStateInterface, payload: LangEnum): void {
    state.lang = payload
  },
  mutateIsShowPopupContactUs (state: GeneralStateInterface, payload: boolean): void {
    state.isShowPopupContactUs = payload
  }

}

export default mutation
