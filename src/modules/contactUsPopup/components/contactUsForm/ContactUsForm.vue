<template>
  <form
    class="contact-us-popup-form"
    @submit.prevent="handelSubmitForm"
  >
    <div class="contact-us-popup-form__field-list contact-us-popup-form__field-list_text">
      <div
        v-for="field in fields"
        :key="field.name"
        :class="['contact-us-popup-form__field', {'contact-us-popup-form__field--text-area': field.isArea}]"
      >
        <CustomInput
          v-model="field.value"
          :is-area="field.isArea"
          :is-error="field.isError"
          :placeholder="field.placeholder"
          :error-message="field.errorMessage"
        />
      </div>
    </div>
    <div class="contact-us-popup-form__field-list contact-us-popup-form__field-list_file">
      <FilePicker
        v-model="filesField"
        is-multiple
        :label="lang.common.filePicker"
      />
    </div>
    <div class="contact-us-popup-form__button">
      <PrimaryButton>
        {{ lang.contactUsPopup.sendButton }}
      </PrimaryButton>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CustomInput from 'components/customInput/CustomInput.vue'
import { useLang } from 'src/hooks/useLang'
import './style.scss'
import PrimaryButton from 'components/primaryButton/PrimaryButton.vue'
import FilePicker from 'components/filePicker/FilePicker.vue'
import { useController } from './controller'

export default defineComponent({
  name: 'ContactUsPopupForm',
  components: {
    FilePicker,
    PrimaryButton,
    CustomInput
  },
  setup (_, { emit }) {
    const lang = useLang()
    const controller = useController({ emit })
    return {
      lang,
      ...controller
    }
  }
})
</script>
