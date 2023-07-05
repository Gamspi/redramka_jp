import { computed } from 'vue'
import { useBlockBody } from 'src/hooks/useBlockBody'
import { useStore } from 'src/store'

export const useController = () => {
  const store = useStore()

  const isShowPopupContactUs = computed(() => store.state.general.isShowPopupContactUs)
  const handelCloseBlock = () => {
    store.commit('general/mutateIsShowPopupContactUs', false)
  }
  useBlockBody(isShowPopupContactUs, 'contactUs')
  const handelSubmitForm = async (formData: FormData) => {
    console.log(formData)
    await store.dispatch('general/sendMessage', formData)
  }
  return {
    isShowPopupContactUs,
    handelCloseBlock,
    handelSubmitForm
  }
}
