<template>
  <div class="main-block-image">
    <img
      src="../../../../../../assets/icons/mainBlock/mainBlockImageRedDots.svg"
      alt="red dots"
      class="main-block-image__dots-red"
    >
    <img
      src="../../../../../../assets/icons/mainBlock/mainBlockImageBlueDots.svg"
      alt="red dots"
      class="main-block-image__dots-blue"
    >
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

export default defineComponent({
  name: 'MainBlockImage',
  setup () {
    return {}
  }
})
</script>
