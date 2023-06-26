<template>
  <Teleport to="#popup">
    <Transition
      name="contact-us-popup-transition"
    >
      <div
        v-if="isShowPopupContactUs"
        class="contact-us-popup"
      >
        <div class="contact-us-popup__container container">
          <div class="contact-us-popup__header">
            <button
              class="contact-us-popup__close"
              @click="handelCloseBlock"
            />
            <h2 class="contact-us-popup__title">
              {{ lang.contactUsPopup.title }}
            </h2>
            <p class="contact-us-popup__description">
              {{ lang.contactUsPopup.description }}
            </p>
          </div>
          <div class="contact-us-popup__body">
            <ContactUsPopupForm />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import './style.scss'
import { useController } from './controller'
import { useLang } from 'src/hooks/useLang'
import ContactUsPopupForm from './components/contactUsForm/ContactUsForm.vue'

export default defineComponent({
  name: 'ContactUsPopup',
  components: { ContactUsPopupForm },
  setup () {
    const controller = useController()
    const lang = useLang()
    return {
      lang,
      ...controller
    }
  }
})
</script>
