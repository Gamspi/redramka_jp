import { LangContentType, ReviewType } from 'src/store/testimonial/testimonial'
import { LangEnum } from 'src/utils/enum/langEnum'

function langConverter (langObj: any, key: LangEnum): LangContentType {
  return {
    name: langObj[key]?.name ?? '',
    specialty: langObj[key]?.specialty ?? '',
    text: langObj[key]?.text ?? ''
  }
}

export function reviewConverter (target: any): ReviewType {
  return {
    [LangEnum.RU]: langConverter(target, LangEnum.RU),
    [LangEnum.ENG]: langConverter(target, LangEnum.ENG),
    id: +(target?.id ?? '')
  }
}
