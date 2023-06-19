<template>
  <div class="main-block-review">
    <div class="main-block-review__header">
      <img
        src="../../../../../../assets/images/mainBlock/mainBlockReviewAvatar.png"
        alt="avatar"
        class="main-block-review__avatar"
      >
      <div class="main-block-review__info">
        <h5 class="main-block-review__name">
          {{ lang.mainBlock.review.name }}
        </h5>
        <div class="main-block-review__job-title">
          {{ lang.mainBlock.review.job }}
        </div>
      </div>
    </div>
    <q class="main-block-review__body">
      {{ lang.mainBlock.review.text }}
    </q>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import './style.scss'
import { useLang } from 'src/hooks/useLang'

export default defineComponent({
  name: 'MainBlockReview',
  setup () {
    const lang = useLang()
    return {
      lang
    }
  }
})
</script>
