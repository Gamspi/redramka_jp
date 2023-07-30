import { LangEnum } from 'src/utils/enum/langEnum'

export interface LangContentType {
  name: string,
  specialty: string,
  text: string
}

export interface ReviewType {
  id: string | number,
  [LangEnum.RU]: LangContentType,
  [LangEnum.ENG]: LangContentType
}

export interface TestimonialStateInterface {
  list: ReviewType[];
}
