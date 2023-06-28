<template>
  <section
    ref="intersectionTargetRef"
    class="main-block"
  >
    <div class="main-block__container">
      <div class="main-block__header">
        <h1 class="main-block__title">
          {{ local.mainBlock.title }}
        </h1>
        <p class="main-block__description">
          {{ local.mainBlock.description }}
        </p>
      </div>

      <div class="main-block__button">
        <PrimaryButton @click="handelStartButtonClick">
          {{ local.mainBlock.button }}
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
import { useLang } from 'src/hooks/useLang'
import { useController } from './controller'
import './style.scss'
import PrimaryButton from 'components/primaryButton/PrimaryButton.vue'
import MainBlockImage from './components/mainBlockImage/MainBlockImage.vue'
import MainBlockAchievement
  from './components/mainBlockAchievement/MainBlockAchievement.vue'
import MainBlockReview from './components/mainBlockReview/MainBlockReview.vue'

export default defineComponent({
  name: 'MainBlock',
  components: {
    MainBlockReview,
    MainBlockAchievement,
    MainBlockImage,
    PrimaryButton
  },
  setup () {
    const local = useLang()
    const controller = useController()
    return {
      local,
      ...controller
    }
  }
})
</script>
