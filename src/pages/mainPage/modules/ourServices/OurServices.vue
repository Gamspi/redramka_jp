<template>
  <section class="our-services">
    <div class="our-services__container container">
      <div class="our-services__body">
        <div class="our-services__header">
          <h3 class="our-services__sup-title sup-title">
            {{ lang.ourServices.supTitle }}
          </h3>
          <h2 class="our-services__title title">
            {{ lang.ourServices.title }}
          </h2>
        </div>

        <p class="our-services__description">
          {{ lang.ourServices.description }}
        </p>
        <div class="our-services__more">
          <ArrowLink
            :label="lang.ourServices.moreButton"
            href="#"
          />
        </div>
      </div>
      <div class="our-services__cards">
        <OurServicesCard
          v-for="item in ourServicesCards"
          :key="item.to"
          :label="item.label[$store.state.general.lang]"
          :to="item.to"
          :icon="item.icon"
          :color="item.color"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useLang } from 'src/hooks/useLang'
import ArrowLink from 'components/arrowLink/ArrowLink.vue'
import { ourServicesCards } from './constants/cards'
import './style.scss'
import OurServicesCard from 'pages/mainPage/modules/ourServices/components/ourServicesCard/OurServicesCard.vue'

export default defineComponent({
  name: 'OurServices',
  components: {
    OurServicesCard,
    ArrowLink
  },
  setup () {
    const lang = useLang()
    return {
      lang,
      ourServicesCards
    }
  }
})
</script>
