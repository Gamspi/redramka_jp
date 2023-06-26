import { onMounted, ref } from 'vue'

export const useController = () => {
  const isShowComponent = ref(true)
  const TIME_ANIMATIONS = 5000
  onMounted(() => {
    setTimeout(() => {
      isShowComponent.value = false
    }, TIME_ANIMATIONS)
  })
  return {
    isShowComponent
  }
}
