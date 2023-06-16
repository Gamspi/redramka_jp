import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { GeneralStateInterface } from './state'
const getters: GetterTree<GeneralStateInterface, StateInterface> = {
  getIsGeneralLoading (context): boolean {
    return context.isGeneralLoading // eslint-disable-line
  }

}

export default getters
