import { computed, onMounted } from 'vue'
import { useStore } from 'src/store'

export const useController = () => {
  const store = useStore()
  const changeIsGeneralLoading = (val: boolean) => { store.commit('general/mutateIsGeneralLoading', val) }

  const IsGeneralLoading = computed(() => store.state.general.isGeneralLoading)
  onMounted(() => {
    setTimeout(() => {
      changeIsGeneralLoading(false)
    }, 1000)
  })
  return {
    IsGeneralLoading
  }
}
