import { MutationTree } from 'vuex'
import { GeneralStateInterface } from './state'

const mutation: MutationTree<GeneralStateInterface> = {
  mutateIsGeneralLoading (state: GeneralStateInterface, payload: boolean): void {
    state.isGeneralLoading = payload
  },
  mutateIsShowPopupContactUs (state: GeneralStateInterface, payload: boolean): void {
    state.isShowPopupContactUs = payload
  }

}

export default mutation
