import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { TestimonialStateInterface } from './testimonial'
import { ResponseType } from '../type'
import GetService from 'src/services/GetService'
import { reviewConverter } from 'src/helpers/converters/converter'

const actions: ActionTree<TestimonialStateInterface, StateInterface> = {
  async getReviews (context) {
    try {
      const { data, status } = await GetService.apiRequest<ResponseType<unknown>>('json/reviews.json')
      if (!status && !data) return
      if (Array.isArray(data)) {
        context.commit('listMutation', data.map(item => reviewConverter(item)))
      }
    } catch (e) {
      console.log(e)
    }
  }
}

export default actions
