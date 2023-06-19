import { LangEnum } from 'src/utils/enum/langEnum'
import { ruLocal } from 'src/lang/ru'
import { engLocal } from 'src/lang/eng'

export const useLang = () => {
  const [browserLang] = (window.navigator.language || navigator.language).match(/[a-z]+/g) || ['']
  switch (browserLang) {
    case LangEnum.RU:
      return ruLocal
    case LangEnum.ENG:
      return engLocal
    default:
      return engLocal
  }
}
