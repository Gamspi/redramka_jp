import { useStore } from 'src/store'

export const useController = () => {
  const store = useStore()
  const handelClickGetStarted = () => {
    store.commit('general/mutateIsShowPopupContactUs', true)
  }
  return { handelClickGetStarted }
}
