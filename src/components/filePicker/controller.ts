type Args = {
  emit: (event: string, ...args: any[]) => void
}

export const useController = ({ emit }: Args) => {
  const handelChangeInput = (e: InputEvent) => {
    const target = e.target as HTMLInputElement
    const result = []
    if (target.files) {
      for (let i = 0; i < target.files.length; i++) {
        result.push(target.files[i])
      }
    }
    emit('update:modelValue', result)
  }
  return {
    handelChangeInput
  }
}
