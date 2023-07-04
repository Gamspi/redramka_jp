<template>
  <section class="portfolio">
    <div class="portfolio__dots">
      <ImageDots color="#EB00FF" />
      <ImageDots color="#EB00FF" />
    </div>
    <div class="portfolio__container container">
      <div class="portfolio__header">
        <h3 class="portfolio__sup-title sup-title">
          {{ lang.portfolio.supTitle }}
        </h3>
        <h2 class="portfolio__title title">
          {{ lang.portfolio.title }}
        </h2>
        <p class="portfolio__description">
          {{ lang.portfolio.description }}
        </p>
      </div>
      <div class="portfolio__body">
        <PortfolioCard
          v-for="item in portfolioCards"
          :key="item.label"
          :label="item.label"
          :image="item.image"
          :src="item.src"
          :is-small="item.isSmall"
        />
      </div>
      <div class="portfolio__footer">
        <PrimaryButton
          bordered
        >
          {{ lang.portfolio.seeAllButton }}
        </PrimaryButton>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useLang } from 'src/hooks/useLang'
import './style.scss'
import PortfolioCard from './components/portfolioCard/PortfolioCard.vue'
import PrimaryButton from 'components/primaryButton/PrimaryButton.vue'
import { portfolioCards } from 'pages/mainPage/modules/portfolio/constants/cards'
import ImageDots from 'components/imageDots/ImageDots.vue'

export default defineComponent({
  name: 'Portfolio',
  components: {
    ImageDots,
    PrimaryButton,
    PortfolioCard
  },
  setup () {
    const lang = useLang()
    return {
      lang,
      portfolioCards
    }
  }
})
</script>
