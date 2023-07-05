import { getRandom } from 'src/utils/getRandom'
import { ref } from 'vue'

type Args = { emit: (event: string, ...args: any[]) => void }
export const useController = ({ emit }: Args) => {
  const defaultValue = ref('')
  const isFocused = ref(false)
  const inputId = getRandom(undefined, 'custom-input-')
  // todo  убрать getRandom

  const handelFocus = () => {
    isFocused.value = true
  }
  const handelBlur = () => {
    isFocused.value = false
  }
  const handelChangeModelValue = (e: InputEvent) => {
    const target = e.target as HTMLInputElement
    const value = target.value
    defaultValue.value = value
    emit('update:modelValue', value)
    emit('update:is', false)
  }
  return {
    inputId,
    isFocused,
    defaultValue,
    handelBlur,
    handelFocus,
    handelChangeModelValue
  }
}
