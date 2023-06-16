import ApiService from './ApiService'
import { HttpError } from '@microsoft/signalr'
import { ResponseType } from 'src/models/response'

export default class LoadService {
  public static async apiRequest<T> (url: string): Promise<ResponseType<T> > {
    const result: ResponseType<T> = await (await ApiService.ApiClient().get(`${url}`).catch(
      (err) => {
        throw new HttpError('Ошибка при загрузке', err.response) //eslint-disable-line
      }))?.data as ResponseType<T>
    return result
  }
}
