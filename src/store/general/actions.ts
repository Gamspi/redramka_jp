import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { GeneralStateInterface } from './state'
import LoadService from '../../services/LoadService'
import apiLinks from '../apiLinks.json'
import PostService from 'src/services/PostService'

const actions: ActionTree<GeneralStateInterface, StateInterface> = {
  async loadMenuList (): Promise<void> {
    await LoadService.apiRequest((apiLinks as { [k: string]: string }).menu).then(
      result => {
        // eslint-disable-next-line no-console
        console.log('RESULT!', result)
      })
  },
  async loadGeneralInfo (context): Promise<void> {
    await context.dispatch('loadMenuList')
  },
  async sendMessage (context, formData: FormData): Promise<void> {
    const response = await PostService.apiRequest('json/reviews.json', formData)
    console.log(response)
  }

}

export default actions
