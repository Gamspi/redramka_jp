import { MutationTree } from 'vuex'
import { ReviewType, TestimonialStateInterface } from './type'

const mutation: MutationTree<TestimonialStateInterface> = {
  listMutation (state: TestimonialStateInterface, payload: ReviewType[]) {
    state.list = payload
  }
}

export default mutation
