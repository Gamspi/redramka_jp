import { useStore } from 'src/store'

export const useController = () => {
  const store = useStore()
  const handelStartButtonClick = () => {
    store.commit('general/mutateIsShowPopupContactUs', true)
  }
  return {
    handelStartButtonClick
  }
}
