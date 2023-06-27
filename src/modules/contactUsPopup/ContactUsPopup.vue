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
          <button
            class="contact-us-popup__close"
            @click="handelCloseBlock"
          >
            <svg
              class="contact-us-popup__icon"
              viewBox="0 0 30 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.7279 18.7279L9 6"
                stroke-width="1.7"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.0001 18.7279L21.728 6"
                stroke-width="1.7"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div class="contact-us-popup__content">
            <div class="contact-us-popup__header">
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
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts">
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
