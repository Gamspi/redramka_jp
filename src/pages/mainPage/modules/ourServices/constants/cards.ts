import { OurServicesCardEnum } from 'src/utils/enum/ourServicesCardEnum'
import monitor from 'src/assets/icons/services/monitor.svg'
import tv from 'src/assets/icons/services/tv.svg'
import settings from 'src/assets/icons/services/settings.svg'
import penTool from 'src/assets/icons/services/penTool.svg'
import { LangEnum } from 'src/utils/enum/langEnum'

export const ourServicesCards = [
  {
    icon: monitor,
    label: {
      [LangEnum.ENG]: 'Social Media Management',
      [LangEnum.RU]: 'Управление социальными сетями'
    },
    to: '#',
    color: OurServicesCardEnum.BLUE
  },
  {
    icon: settings,
    label: {
      [LangEnum.ENG]: 'Search Engine Optimization',
      [LangEnum.RU]: 'Поисковая оптимизация'
    },
    to: '#',
    color: OurServicesCardEnum.RED
  },
  {
    icon: penTool,
    label: {
      [LangEnum.ENG]: 'Design',
      [LangEnum.RU]: 'Дизайн'
    },
    to: '#',
    color: OurServicesCardEnum.GREEN
  },
  {
    icon: tv,
    label: {
      [LangEnum.ENG]: 'Ads',
      [LangEnum.RU]: 'Объявления'
    },
    to: '#',
    color: OurServicesCardEnum.YELLOW
  }
]
