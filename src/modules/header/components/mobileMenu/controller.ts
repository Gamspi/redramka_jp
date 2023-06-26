import { LangEnum } from 'src/utils/enum/langEnum'

export const useController = () => {
  const currentLang = LangEnum.ENG

  return {
    currentLang
  }
}
