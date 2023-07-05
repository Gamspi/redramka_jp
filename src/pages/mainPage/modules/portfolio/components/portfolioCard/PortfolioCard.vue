<template>
  <a
    :href="src"
    :class="['portfolio-card', {'portfolio-card--small': isSmall}]"
  >
    <img
      :src="image"
      alt=""
      class="portfolio-card__background"
    >
    <span class="portfolio-card__label">
      {{ label }}
    </span>
  </a>
</template>

<script lang="ts">
import { defineComponent, ImgHTMLAttributes, PropType } from 'vue'
import './style.scss'

export default defineComponent({
  name: 'PortfolioCard',
  props: {
    src: {
      type: String,
      default: '#'
    },
    image: {
      type: String as PropType<ImgHTMLAttributes['src']>,
      required: true
    },
    label: {
      type: String,
      default: ''
    },

    isSmall: {
      type: Boolean,
      default: false
    }

  },
  setup () {
    return {}
  }
})
</script>
