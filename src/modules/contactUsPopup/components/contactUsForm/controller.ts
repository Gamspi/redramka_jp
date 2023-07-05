import { ref } from 'vue'

type Args = {
  emit: (event: string, ...args: any[]) => void
}

export const useController = ({ emit }: Args) => {
  const fields = ref({
    name: {
      value: '',
      isError: false
    },
    email: {
      value: '',
      isError: false
    },
    message: {
      value: '',
      isError: false
    }
  })
  const filesField = ref<File[]>([])
  const validationFields = () => {
    let isValid = true
    for (const fieldsKey in fields.value) {
      const field = fields.value[fieldsKey as keyof typeof fields.value]
      if (!field.value) {
        field.isError = true
        isValid = false
      } else {
        field.isError = false
      }
    }
    return isValid
  }
  const handelSubmitForm = () => {
    if (validationFields()) {
      const formData = new FormData()
      for (const valueKey in fields.value) {
        formData.append(valueKey, fields.value[valueKey as keyof typeof fields.value].value)
      }
      filesField.value.forEach(item => formData.append('file[]', item))
      emit('onSubmit', formData)
    }
  }

  return {
    fields,
    handelSubmitForm,
    filesField
  }
}
