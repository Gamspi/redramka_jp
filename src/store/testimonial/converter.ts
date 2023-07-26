import { ReviewType } from 'src/store/testimonial/type'
import { LangEnum } from 'src/utils/enum/langEnum'

export function reviewConverter (target: unknown): ReviewType {
  const result: ReviewType = {
    [LangEnum.RU]: {
      name: '',
      specialty: '',
      text: ''
    },
    [LangEnum.ENG]: {
      name: '',
      specialty: '',
      text: ''
    },
    id: ''
  }
  if (target instanceof Object) {
    for (const targetKey in target) {
      const value = target[targetKey as keyof typeof target]
      if (value instanceof Object) {
        for (const valueKey in value) {
          let key
          const langValue = value[valueKey as keyof typeof value]
          if (targetKey === LangEnum.ENG) key = LangEnum.ENG
          if (targetKey === LangEnum.RU) key = LangEnum.RU
          if (key && langValue) {
            switch (valueKey) {
              case 'name':
                result[key][valueKey] = langValue
                break
              case 'specialty':
                result[key][valueKey] = langValue
                break
              case 'text':
                result[key][valueKey] = langValue
                break
            }
          }
        }
      } else {
        if (targetKey === 'id') {
          result.id = value
        }
      }
    }
  }

  return result
}
