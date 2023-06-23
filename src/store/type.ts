export type ResponseType<T> = {
  'status': 'ok' | null,
  'data': T
}
