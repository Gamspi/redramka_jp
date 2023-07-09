import { LangEnum } from 'src/utils/enum/langEnum'
import { useStore } from 'src/store'
import { computed } from 'vue'

type Args = {
  emit: (event: string, ...args: any[]) => void
}
export const useController = ({ emit }: Args) => {
  const currentLang = computed(() => store.state.general.lang)
  const store = useStore()
  const handelShowContactUsPopup = () => {
    emit('close', false)
    store.commit('general/mutateIsShowPopupContactUs', true)
  }
  const handelChangeLang = (value: LangEnum) => {
    store.commit('general/mutateLang', value)
  }

  return {
    currentLang,
    handelChangeLang,
    handelShowContactUsPopup
  }
}
