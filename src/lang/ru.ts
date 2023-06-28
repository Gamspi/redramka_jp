import { mainPageRu } from 'src/lang/mainPage/ru'

export const ruLocal = {
  ...mainPageRu,
  contactUsPopup: {
    title: 'Отправьте нам сообщение',
    description: 'Мы продвигаемся с созданием Креативной Стратегии, чтобы помочь вашей бизнес-цели',
    fields: {
      name: 'Ваше имя',
      email: 'Электронная почта',
      message: 'Ваше сообщение'
    },
    sendButton: 'Отправить сообщение'
  },
  footer: {
    copy: 'Copyright @ 2022 Агентство Креатив. Все права защищены'
  },
  common: {
    filePicker: 'Прикрепить файл',
    contactUs: 'Связаться с нами'
  }
}
