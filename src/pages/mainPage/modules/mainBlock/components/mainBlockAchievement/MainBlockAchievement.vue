<template>
  <article class="main-block-achievement">
    <div class="main-block-achievement__header">
      <img
        src="../../../../../../assets/icons/mainBlock/achievementStar.svg"
        alt="achievement Star"
        class="main-block-achievement__star"
      >
      <h6 class="main-block-achievement__title">
        Great Project
      </h6>
    </div>
    <div class="main-block-achievement__body">
      <span class="main-block-achievement__count">800+</span>&nbsp;<span class="main-block-achievement__status">Done</span>
    </div>
  </article>
</template>

<script>
import { defineComponent } from 'vue'
import './style.scss'
export default defineComponent({
  name: 'MainBlockAchievement',
  setup () {
    return {}
  }
})
</script>
