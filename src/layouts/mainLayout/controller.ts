import { computed, onMounted } from 'vue'
import { useStore } from 'src/store'

const useController = () => {
  const store = useStore()
  const changeIsGeneralLoading = (val: boolean) => { store.commit('general/mutateIsGeneralLoading', val) }

  const IsGeneralLoading = computed(() => store.state.general.isGeneralLoading)
  const getReviews = async () => {
    await store.dispatch('testimonial/getReviews')
  }
  const onMountedCallback = async () => {
    const [browserLang] = (window.navigator.language || navigator.language).match(/[a-z]+/g) || ['']
    store.commit('general/mutateIsGeneralLoading', browserLang)
    try {
      await getReviews()
    } finally {
      changeIsGeneralLoading(false)
    }
  }
  onMounted((onMountedCallback))
  return {
    IsGeneralLoading
  }
}

export default useController
