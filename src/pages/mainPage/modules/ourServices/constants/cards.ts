import { OurServicesCardEnum } from 'src/utils/enum/ourServicesCardEnum'
import monitor from 'src/assets/icons/services/monitor.svg'
import tv from 'src/assets/icons/services/tv.svg'
import settings from 'src/assets/icons/services/settings.svg'
import penTool from 'src/assets/icons/services/penTool.svg'

export const ourServicesCards = [
  {
    icon: monitor,
    label: 'Social Media Management',
    to: '#',
    color: OurServicesCardEnum.BLUE
  },
  {
    icon: settings,
    label: 'Search Engine Optimization',
    to: '#',
    color: OurServicesCardEnum.RED
  },
  {
    icon: penTool,
    label: 'Design',
    to: '#',
    color: OurServicesCardEnum.GREEN
  },
  {
    icon: tv,
    label: 'Ads',
    to: '#',
    color: OurServicesCardEnum.YELLOW
  }
]
