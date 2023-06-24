<template>
  <div class="collaboration">
    <div class="collaboration__container container">
      <div class="collaboration__images">
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
          <PrimaryButton>
            {{ lang.collaboration.button }}
          </PrimaryButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PrimaryButton from 'components/primaryButton/PrimaryButton.vue'
import imag2 from 'assets/images/collaboration/collaboration001.png'
import imag1 from 'assets/images/collaboration/collaboration002.png'
import { useLang } from 'src/hooks/useLang'
import './style.scss'

export default defineComponent({
  name: 'Collaboration',
  components: { PrimaryButton },
  setup () {
    const lang = useLang()
    return {
      lang,
      imag1,
      imag2
    }
  }
})
</script>
