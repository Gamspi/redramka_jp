import card1 from 'src/assets/images/portfolio/portfolio001.png'
import card2 from 'src/assets/images/portfolio/portfolio002.png'
import card3 from 'src/assets/images/portfolio/portfolio003.png'
import { LangEnum } from 'src/utils/enum/langEnum'

export const portfolioCards = [
  {
    src: '',
    image: card1,
    label: {
      [LangEnum.ENG]: 'Design Furniture App',
      [LangEnum.RU]: 'Приложение для дизайна мебели'
    },
    isSmall: true
  },
  {
    src: '',
    image: card2,
    label: {
      [LangEnum.ENG]: 'Cloud App',
      [LangEnum.RU]: 'Облачное приложение'
    },
    isSmall: false
  },
  {
    src: '',
    image: card3,
    label: {
      [LangEnum.ENG]: 'Design Byte App',
      [LangEnum.RU]: 'Приложение «Дизайн Байт»'
    },
    isSmall: true
  }
]
