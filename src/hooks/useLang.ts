import { LangEnum } from 'src/utils/enum/langEnum'
import { ruLocal } from 'src/lang/ru'
import { engLocal } from 'src/lang/eng'
import { useStore } from 'src/store'
import { computed } from 'vue'

export const useLang = () => {
  const store = useStore()
  return computed(() => {
    switch (store.state.general.lang) {
      case LangEnum.RU:
        return ruLocal
      case LangEnum.ENG:
        return engLocal
      default:
        return engLocal
    }
  })
}
