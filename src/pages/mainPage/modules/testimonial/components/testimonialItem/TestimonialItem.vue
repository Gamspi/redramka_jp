<template>
  <article class="testimonial-item">
    <div class="testimonial-item__header">
      <img
        :src="icon"
        alt="avatar"
        class="testimonial-item__avatar"
      >
      <div class="testimonial-item__title">
        <h4 class="testimonial-item__name">
          {{ name }}
        </h4>
        <h5 class="testimonial-item__specialty">
          {{ specialty }}
        </h5>
      </div>
    </div>
    <q class="testimonial-item__quote">
      {{ text }}
    </q>
  </article>
</template>

<script lang="ts">
import { defineComponent, ImgHTMLAttributes, PropType } from 'vue'
import './style.scss'

export default defineComponent({
  name: 'TestimonialItem',
  props: {
    icon: {
      type: String as PropType<ImgHTMLAttributes['src']>,
      required: true
    },
    text: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    specialty: {
      type: String,
      default: ''
    }

  }
})
</script>
