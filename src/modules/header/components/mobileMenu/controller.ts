import { LangEnum } from 'src/utils/enum/langEnum'
import { useStore } from 'src/store'

type Args = {
  emit: (event: string, ...args: any[]) => void
}
export const useController = ({ emit }: Args) => {
  const currentLang = LangEnum.ENG
  const store = useStore()
  const handelShowContactUsPopup = () => {
    emit('close')
    store.commit('general/mutateIsShowPopupContactUs', true)
  }

  return {
    currentLang,
    handelShowContactUsPopup
  }
}
