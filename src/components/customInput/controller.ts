import { getRandom } from 'src/utils/getRandom'
import { ref } from 'vue'

type Args = { emit: (event: string, ...args: any[]) => void }
export const useController = ({ emit }: Args) => {
  const defaultValue = ref('')
  const inputId = getRandom(undefined, 'custom-input-')
  const handelChangeModelValue = (e: InputEvent) => {
    console.log(e)
    const target = e.target as HTMLInputElement
    const value = target.value
    defaultValue.value = value
    emit('update:modelValue', value)
  }
  return {
    inputId,
    defaultValue,
    handelChangeModelValue
  }
}
