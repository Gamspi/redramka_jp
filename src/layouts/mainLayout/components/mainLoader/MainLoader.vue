<template>
  <Teleport to="#main-loader">
    <Transition name="main-loader">
      <div
        v-if="isShow || isShowComponent"
        class="main-loader"
      >
        <div class="main-loader__balls">
          <div class="main-loader__ball">
            <Ball
              color="blue"
              is-animated
              animation-number="1"
            />
          </div>
          <div class="main-loader__ball">
            <Ball
              color="blue"
              is-animated
              animation-number="2"
            />
          </div>
          <div class="main-loader__ball">
            <Ball
              is-animated
              animation-number="3"
            />
          </div>
          <div class="main-loader__ball">
            <Ball
              is-animated
              animation-number="4"
            />
          </div>
        </div>
        <div class="main-loader__wrapper">
          <div class="main-loader__body">
            <img
              src="../../../../assets/images/mainLoader/loaderLogo.svg"
              alt="main logo"
              class="main-loader__logo"
            >
            <div class="main-loader__content">
              <h2 class="main-loader__title">
                Agency
              </h2>
              <h4 class="main-loader__sub-title">
                Creative
              </h4>
            </div>
          </div>
          <div class="main-loader__footer">
            <p class="main-loader__description">
              will help to reach your goals.
            </p>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang='ts'>
import { defineComponent, onMounted, ref } from 'vue'
import './style.scss'
import Ball from 'components/ball/Ball.vue'

export default defineComponent({
  name: 'MainLoader',
  components: { Ball },
  props: {
    isShow: {
      type: Boolean,
      required: true
    }
  },
  setup () {
    const isShowComponent = ref(true)
    const TIME_ANIMATIONS = 5000
    onMounted(() => {
      setTimeout(() => {
        isShowComponent.value = false
      }, TIME_ANIMATIONS)
    })
    return {
      isShowComponent
    }
  }
})
</script>
