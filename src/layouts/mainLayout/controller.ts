import { computed } from 'vue'
import { useStore } from 'src/store'

const useController = () => {
  const store = useStore()
  const changeIsGeneralLoading = (val: boolean) => { store.commit('general/mutateIsGeneralLoading', val) }
  const loadGeneralInfo = async () => { await store.dispatch('general/loadGeneralInfo') }
  const IsGeneralLoading = computed(() => store.getters['general/getIsGeneralLoading']) //eslint-disable-line
  const generalLoading = async () => {
    changeIsGeneralLoading(true)
    await loadGeneralInfo()
    setTimeout(() => {
      changeIsGeneralLoading(false)
    }, 1000)
  }
  const resizeHandler = () => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }
  const onMountedCallback = async () => {
    resizeHandler()
    await generalLoading()
    window.addEventListener('resize', () => {
      resizeHandler()
    })
  }

  return {
    IsGeneralLoading,
    onMountedCallback
  }
}

export default useController
