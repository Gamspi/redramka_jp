import { LangEnum } from 'src/utils/enum/langEnum'

interface LangContentType {
  'name': string,
  'specialty': string,
  'text': string
}

export interface ResponseReview {
  'id': string,
  [LangEnum.RU]: LangContentType,
  [LangEnum.ENG]: LangContentType
}

export interface ReviewType {
  'id': string,
  [LangEnum.RU]: LangContentType,
  [LangEnum.ENG]: LangContentType
}
export interface TestimonialStateInterface {
  list: ReviewType[];
}
