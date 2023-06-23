import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { ResponseReview, TestimonialStateInterface } from './type'
import { ResponseType } from '../type'
import GetService from 'src/services/GetService'
import { reviewConverter } from 'src/store/testimonial/converter'

const actions: ActionTree<TestimonialStateInterface, StateInterface> = {
  async getReviews (context) {
    try {
      const { data, status } = await GetService.apiRequest<ResponseType<ResponseReview[]>>('json/reviews.json')
      if (!status && !data) return
      context.commit('listMutation', data.map(item => reviewConverter(item)))
    } catch (e) {
      console.log(e)
    }
  }
}

export default actions
