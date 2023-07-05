import { onMounted, ref } from 'vue'
import { useBlockBody } from 'src/hooks/useBlockBody'

export const useController = () => {
  const isShowComponent = ref(true)
  const blockBody = ref(false)
  const TIME_ANIMATIONS = 5000
  useBlockBody(blockBody, 'mainLoader')
  onMounted(() => {
    blockBody.value = true
    setTimeout(() => {
      blockBody.value = false
      isShowComponent.value = false
    }, TIME_ANIMATIONS)
  })
  return {
    isShowComponent
  }
}
