<template>
  <form class="contact-us-popup-form">
    <div class="contact-us-popup-form__field-list contact-us-popup-form__field-list_text">
      <div class="contact-us-popup-form__field">
        <CustomInput :placeholder="lang.contactUsPopup.fields.name" />
      </div>
      <div class="contact-us-popup-form__field">
        <CustomInput :placeholder="lang.contactUsPopup.fields.email" />
      </div>
      <div class="contact-us-popup-form__field contact-us-popup-form__field--text-area">
        <CustomInput
          :placeholder="lang.contactUsPopup.fields.message"
          is-area
        />
      </div>
    </div>
    <div class="contact-us-popup-form__field-list contact-us-popup-form__field-list_file">
      <FilePicker />
    </div>
    <div class="contact-us-popup-form__button">
      <PrimaryButton>
        {{ lang.contactUsPopup.sendButton }}
      </PrimaryButton>
    </div>
  </form>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import CustomInput from 'components/customInput/CustomInput.vue'
import { useLang } from 'src/hooks/useLang'
import './style.scss'
import PrimaryButton from 'components/primaryButton/PrimaryButton.vue'
import FilePicker from 'components/filePicker/FilePicker.vue'

export default defineComponent({
  name: 'ContactUsPopupForm',
  components: { FilePicker, PrimaryButton, CustomInput },
  setup () {
    const lang = useLang()
    return {
      lang
    }
  }
})
</script>
