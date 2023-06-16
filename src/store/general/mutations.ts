import { MutationTree } from 'vuex'
import { GeneralStateInterface } from './state'

const mutation: MutationTree<GeneralStateInterface> = {
  mutateIsGeneralLoading (state: GeneralStateInterface, payload: boolean): void {
    state.isGeneralLoading = payload
  }

}

export default mutation
