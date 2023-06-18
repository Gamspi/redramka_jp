<template>
  <section class="main-block">
    <div class="main-block__container">
      <div class="main-block__header">
        <h1 class="main-block__title">
          Make your dream
          business goal come true
        </h1>
        <p class="main-block__description">
          when you need us for improve your business,
          then come with us to help your business have reach it, you just sit and feel that goal.
        </p>
      </div>

      <div class="main-block__button">
        <PrimaryButton>
          Start Project
        </PrimaryButton>
      </div>
      <div class="main-block__footer">
        <MainBlockImage />
        <div class="main-block__achievement">
          <MainBlockAchievement />
        </div>
        <div class="main-block__review">
          <MainBlockReview />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import './style.scss'
import PrimaryButton from 'components/primaryButton/PrimaryButton.vue'
import MainBlockImage from 'pages/mainPage/modules/mainBlock/components/mainBlockImage/MainBlockImage.vue'
import MainBlockAchievement
  from 'pages/mainPage/modules/mainBlock/components/mainBlockAchievement/MainBlockAchievement.vue'
import MainBlockReview from 'pages/mainPage/modules/mainBlock/components/mainBlockReview/MainBlockReview.vue'

export default defineComponent({
  name: 'MainBlock',
  components: {
    MainBlockReview,
    MainBlockAchievement,
    MainBlockImage,
    PrimaryButton
  },
  setup () {
    return {}
  }
})
</script>
