import { LangEnum } from 'src/utils/enum/langEnum'

export const navMenu = [
  {
    link: '/',
    label: {
      [LangEnum.ENG]: 'Home',
      [LangEnum.RU]: 'Главная'
    }
  },
  {
    link: '/about',
    label: {
      [LangEnum.ENG]: 'About',
      [LangEnum.RU]: 'О нас'
    }
  },
  {
    link: '/services',
    label: {
      [LangEnum.ENG]: 'Services',
      [LangEnum.RU]: 'Услуги'
    }
  },
  {
    link: '/projects',
    label: {
      [LangEnum.ENG]: 'Projects',
      [LangEnum.RU]: 'Проекты'
    }
  }
]
