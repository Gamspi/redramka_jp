<template>
  <section class="collaboration">
    <div class="collaboration__container container">
      <div class="collaboration__images">
        <div class="collaboration__background">
          <img
            :src="dots1"
            alt="dots"
            class="collaboration__dots"
          >
          <img
            :src="dots2"
            alt="dots"
            class="collaboration__dots"
          >
        </div>
        <img
          :src="imag1"
          alt=""
          class="collaboration__img"
        >
        <img
          :src="imag2"
          alt=""
          class="collaboration__img"
        >
      </div>
      <div class="collaboration__body">
        <h2 class="collaboration__title">
          {{ lang.collaboration.title }}
        </h2>
        <p class="collaboration__description">
          {{ lang.collaboration.description }}
        </p>
        <div class="collaboration__button">
          <PrimaryButton @click="handelClickGetStarted">
            {{ lang.collaboration.button }}
          </PrimaryButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PrimaryButton from 'components/primaryButton/PrimaryButton.vue'
import imag2 from 'assets/images/collaboration/collaboration001.png'
import imag1 from 'assets/images/collaboration/collaboration002.png'
import dots1 from 'assets/icons/collaboration/bigDots.svg'
import dots2 from 'assets/icons/collaboration/dots.svg'
import { useLang } from 'src/hooks/useLang'
import './style.scss'
import { useController } from './controller'

export default defineComponent({
  name: 'Collaboration',
  components: {
    PrimaryButton
  },
  setup () {
    const lang = useLang()
    const controller = useController()
    return {
      lang,
      imag1,
      imag2,
      dots1,
      dots2,
      ...controller
    }
  }
})
</script>
