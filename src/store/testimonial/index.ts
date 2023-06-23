import { Module } from 'vuex'
import { StateInterface } from '../index'
import state from './state'
import { TestimonialStateInterface } from './type'
import actions from './actions'
import mutations from './mutations'

const exampleModule: Module<TestimonialStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  mutations,
  state
}

export default exampleModule
