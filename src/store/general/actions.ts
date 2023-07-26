import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { GeneralStateInterface } from './state'
import axios from 'axios'

const actions: ActionTree<GeneralStateInterface, StateInterface> = {
  async sendMessage (context, formData: FormData): Promise<void> {
    await axios.post('https://jsonplaceholder.typicode.com/posts', formData) // заглушка чтр бы сделать пост запрос
  }

}

export default actions
