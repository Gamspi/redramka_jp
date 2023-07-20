import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { GeneralStateInterface } from './state'
import LoadService from '../../services/LoadService'
import apiLinks from '../apiLinks.json'
import PostService from 'src/services/PostService'
import axios from 'axios'

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
    formData.forEach(item => console.log(item))
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData) // заглушка чтр бы сделать пост запрос
    console.log(response)
  }

}

export default actions
