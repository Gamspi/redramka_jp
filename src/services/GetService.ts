import ApiService from './ApiService'
import { HttpError } from '@microsoft/signalr'
import { AxiosError } from 'axios'
export default class GetService {
  public static async apiRequest<T> (url: string, data?: {[k: string]: any}): Promise<T> { //eslint-disable-line
    const formData = new FormData()
    if (data) {
      Object.keys(data).forEach(element => {
        formData.append(element, String(data[element]))
      })
    }

    const result: T = await (await ApiService.ApiClient().get(`${url}`, {
      params: data
    }).catch(
      (err: AxiosError) => {
        throw new HttpError('Ошибка при загрузке', Number(JSON.stringify(err.response)))
      }))?.data as T
    return result
  }
}
