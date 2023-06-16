import ApiService from './ApiService'
import { HttpError } from '@microsoft/signalr'
import { ResponseType } from 'src/models/response'

export default class GetService {
  public static async apiRequest<T> (url: string, data: {[k: string]: any}): Promise<ResponseType<T>> { //eslint-disable-line
    const formData = new FormData()
    Object.keys(data).forEach(element => {
      formData.append(element, String(data[element]))
    })
    const result: ResponseType<T> = await (await ApiService.ApiClient().get(`${url}`, { //eslint-disable-line
      params: data
    }).catch(
      err => { //eslint-disable-line
        throw new HttpError('Ошибка при загрузке', err.response) //eslint-disable-line
      }))?.data as ResponseType<T> //eslint-disable-line
    return result
  }
}
