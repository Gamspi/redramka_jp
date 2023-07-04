<template>
  <div class="about-image-block">
    <div class="about-image-block__dots">
      <ImageDots color="#EB00FF" />
    </div>
    <div class="about-image-block__dots about-image-block__dots--desktop">
      <ImageDots color="#FF5C00" />
    </div>
    <img
      src="../../../../../../assets/images/about/aboutPeople.png"
      alt="about"
      class="about-image-block__content"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ImageDots from 'components/imageDots/ImageDots.vue'
import './style.scss'

export default defineComponent({
  name: 'AboutImageBlock',
  components: { ImageDots }
})
</script>
