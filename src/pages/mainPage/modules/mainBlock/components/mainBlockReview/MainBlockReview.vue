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
          Bill Adams
        </h5>
        <div class="main-block-review__job-title">
          CEO UpTech
        </div>
      </div>
    </div>
    <q class="main-block-review__body">
      This team is really the best in its field,I don't regret working with them, and will come back again thanks
    </q>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import './style.scss'

export default defineComponent({
  name: 'MainBlockReview',
  setup () {
    return {}
  }
})
</script>
