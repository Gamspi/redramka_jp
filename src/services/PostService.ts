import ApiService from './ApiService'
import { HttpError } from '@microsoft/signalr'
import { ResponseType } from 'src/models/response'
export default class PostService {
  public static async apiRequest<T> (url: string, data: {[k: string]: any}): Promise<ResponseType<T> > {
    const formData = new FormData()
    Object.keys(data).forEach(element => {
      formData.append(element, String(data[element]))
    })
    const result: ResponseType<T> = await (await ApiService.ApiClient().post(`${url}`, formData).catch(
      err => {
        throw new HttpError('Ошибка при загрузке', err.response) //eslint-disable-line
      }))?.data as ResponseType<T>
    return result
  }
}
