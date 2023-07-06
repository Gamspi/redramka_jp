import { LangEnum } from 'src/utils/enum/langEnum'

export type FooterMenuItem = {
  title: {
    [LangEnum.ENG]: string,
    [LangEnum.RU]: string
  },
  list: Array<{
    label: {
      [LangEnum.ENG]: string,
      [LangEnum.RU]: string
    },
    link: string
  }>
}
