import { Module } from 'vuex'
import { StateInterface } from '../index'
import state, { GeneralStateInterface } from './state'
import actions from './actions'
import mutations from './mutations'

const exampleModule: Module<GeneralStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  mutations,
  state
}

export default exampleModule
