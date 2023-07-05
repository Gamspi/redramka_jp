import { ref } from 'vue'

type Args = {
  emit: (event: string, ...args: any[]) => void
}

export const useController = ({ emit }: Args) => {
  const files = ref<File[]>([])
  const handelRemoveFile = (file: File) => {
    files.value = files.value.filter(item => item !== file)
    emit('update:modelValue', files.value)
  }
  const handelChangeInput = (e: InputEvent) => {
    const target = e.target as HTMLInputElement

    if (target.files) {
      for (let i = 0; i < target.files.length; i++) {
        files.value.push(target.files[i])
        console.log(target.files[i])
      }
    }
    emit('update:modelValue', files.value)
  }
  return {
    handelRemoveFile,
    handelChangeInput
  }
}
