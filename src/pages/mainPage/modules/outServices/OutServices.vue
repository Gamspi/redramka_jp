<template>
  <div class="our-services">
    <div class="our-services__container container">
      <div class="our-services__header">
        <h3 class="our-services__sup-title sup-title">
          {{ lang.ourServices.supTitle }}
        </h3>
        <h2 class="our-services__title title">
          {{ lang.ourServices.title }}
        </h2>
      </div>
      <div class="our-services__body">
        <p class="our-services__description">
          {{ lang.ourServices.description }}
        </p>
        <ArrowLink
          :label="'test'"
          href="#"
        />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { useLang } from 'src/hooks/useLang'
import ArrowLink from 'components/arrowLink/ArrowLink.vue'

export default defineComponent({
  name: 'OurServices',
  components: { ArrowLink },
  setup () {
    const lang = useLang()
    return {
      lang
    }
  }
})
</script>
