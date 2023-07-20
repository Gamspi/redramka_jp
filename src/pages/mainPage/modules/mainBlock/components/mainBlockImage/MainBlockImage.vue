<template>
  <div class="main-block-image">
    <div class="main-block-image__dots main-block-image__dots--red">
      <ImageDots color="#FF5C00" />
    </div>
    <div class="main-block-image__dots main-block-image__dots--blue">
      <ImageDots />
    </div>
    <div class="main-block-image__dots main-block-image__dots--green">
      <ImageDots color="#24F639" />
    </div>
    <div class="main-block-image__dots main-block-image__dots--white">
      <ImageDots color="#E2E2E2" />
    </div>
    <img
      class="main-block-image__content"
      src="../../../../../../assets/images/mainBlock/mainBlockImage.png"
      alt="people"
    >
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import './style.scss'
import ImageDots from 'components/imageDots/ImageDots.vue'

export default defineComponent({
  name: 'MainBlockImage',
  components: { ImageDots },
  setup () {
    return {}
  }
})
</script>
