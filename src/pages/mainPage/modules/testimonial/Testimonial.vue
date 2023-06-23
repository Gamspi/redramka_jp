<template>
  <section class="testimonial">
    <div class="testimonial__container container">
      <div class="testimonial__header">
        <h3 class="testimonial__sup-title sup-title">
          {{ lang.testimonial.supTitle }}
        </h3>
        <h2 class="testimonial__title title">
          {{ lang.testimonial.title }}
        </h2>
      </div>
      <div
        ref="swiperRef"
        class="testimonial__body"
      >
        <div
          v-for="item in reviews"
          :key="item.id"
          class="testimonial__slide"
        >
          <TestimonialItem
            :icon="avatar"
            :text="item[local].text"
            :name="item[local].name"
            :specialty="item[local].specialty"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import './style.scss'
import { useLang } from 'src/hooks/useLang'
import { useController } from './controller'
import avatar from 'src/assets/images/testimonial/testimonial001.png'
import TestimonialItem from 'pages/mainPage/modules/testimonial/components/testimonialItem/TestimonialItem.vue'

export default defineComponent({
  name: 'Testimonial',
  components: { TestimonialItem },
  setup () {
    const controller = useController()
    const lang = useLang()
    return {
      ...controller,
      lang,
      // аватр сделвн так, потаму что json не возвращает картики
      avatar

    }
  }
})
</script>
