import { MutationTree } from 'vuex'
import { ReviewType, TestimonialStateInterface } from './testimonial'

const mutation: MutationTree<TestimonialStateInterface> = {
  listMutation (state: TestimonialStateInterface, payload: ReviewType[]) {
    state.list = payload
  }
}

export default mutation
