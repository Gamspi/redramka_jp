import { LangEnum } from 'src/utils/enum/langEnum'
import { FooterMenuItem } from 'src/modules/footer/components/footerMenuItem/type'

export const footerMenu: FooterMenuItem[] = [
  {
    title: {
      [LangEnum.ENG]: 'Terms & policies',
      [LangEnum.RU]: 'Условия и политика'
    },
    list: [
      {
        label: {
          [LangEnum.ENG]: 'Terms of Service',
          [LangEnum.RU]: 'Условия использования'
        },
        link: '#'
      },
      {
        label: {
          [LangEnum.ENG]: 'Privacy Policy',
          [LangEnum.RU]: 'Политика конфиденциальности'
        },
        link: '#'
      }
    ]
  },
  {
    title: {
      [LangEnum.ENG]: 'Company',
      [LangEnum.RU]: 'Компания'
    },
    list: [
      {
        label: {
          [LangEnum.ENG]: 'Home',
          [LangEnum.RU]: 'Главная'
        },
        link: '#'
      },
      {
        label: {
          [LangEnum.ENG]: 'About Us',
          [LangEnum.RU]: 'О нас'
        },
        link: '#'
      },
      {
        label: {
          [LangEnum.ENG]: 'Contact Us',
          [LangEnum.RU]: 'Связаться с нами'
        },
        link: '#'
      }
    ]
  },
  {
    title: {
      [LangEnum.ENG]: 'Contact',
      [LangEnum.RU]: 'Контакт'
    },
    list: [
      {
        label: {
          [LangEnum.ENG]: '(+62) 893912392190',
          [LangEnum.RU]: '(+62) 893912392190'
        },
        link: 'tel:(+62) 893912392190'
      },
      {
        label: {
          [LangEnum.ENG]: 'agecnycr@gmail.com',
          [LangEnum.RU]: 'agecnycr@gmail.com'
        },
        link: 'mailto:agecnycr@gmail.com'
      }
    ]
  },
  {
    title: {
      [LangEnum.ENG]: 'Location',
      [LangEnum.RU]: 'Расположение'
    },
    list: [
      {
        label: {
          [LangEnum.ENG]: 'PT Osiris Real Estate International',
          [LangEnum.RU]: 'ПТ Осирис Недвижимость Интернэшнл'
        },
        link: '#'
      },
      {
        label: {
          [LangEnum.ENG]: 'Jl. KH. Wahid Hasyim Kel No.10D',
          [LangEnum.RU]: 'Jl. КХ. Вахид Хасим Кел No.10D'
        },
        link: '#'
      },
      {
        label: {
          [LangEnum.ENG]: 'Jakarta, Indonesia',
          [LangEnum.RU]: 'Джакарта, Индонезия'
        },
        link: '#'
      },
      {
        label: {
          [LangEnum.ENG]: 'team@OsirisRealEstate.com',
          [LangEnum.RU]: 'team@OsirisRealEstate.com'
        },
        link: 'mailto:team@OsirisRealEstate.com'
      }
    ]
  }
]
