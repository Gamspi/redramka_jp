import { ref } from 'vue'
import { useLang } from 'src/hooks/useLang'

type Args = {
  emit: (event: string, ...args: any[]) => void
}

export const useController = ({ emit }: Args) => {
  const lang = useLang()
  const fields = ref([
    {
      name: 'name',
      value: '',
      isError: false,
      errorMessage: '',
      placeholder: lang.value.contactUsPopup.fields.name,
      isArea: false
    },
    {
      name: 'email',
      value: '',
      isError: false,
      errorMessage: '',
      placeholder: lang.value.contactUsPopup.fields.email,
      isArea: false
    },
    {
      name: 'message',
      value: '',
      isError: false,
      errorMessage: '',
      placeholder: lang.value.contactUsPopup.fields.message,
      isArea: true
    }
  ])
  const filesField = ref<File[]>([])
  const validationFields = () => {
    let isValid = true
    fields.value.forEach((field) => {
      if (!field.value) {
        field.isError = true
        field.errorMessage = 'Error message' // сдулано как пример
        isValid = false
      } else {
        field.isError = false
      }
    })
    return isValid
  }
  const handelSubmitForm = () => {
    if (validationFields()) {
      const formData = new FormData()
      fields.value.forEach((field) => {
        formData.append(field.name, field.value)
      })
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
