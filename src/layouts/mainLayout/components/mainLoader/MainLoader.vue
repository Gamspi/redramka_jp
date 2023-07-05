<template>
  <Teleport to="#main-loader">
    <Transition
      name="main-loader"
      duration="1300"
    >
      <div
        v-if="isShow || isShowComponent"
        class="main-loader"
      >
        <div class="main-loader__container">
          <div class="main-loader__balls">
            <Balls />
          </div>

          <div class="main-loader__body">
            <img
              src="../../../../assets/icons/mainLoader/loaderLogo.svg"
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
              <p class="main-loader__description">
                will help to reach your goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import './style.scss'
import { useController } from './controller'
import Balls from 'components/balls/Balls.vue'

export default defineComponent({
  name: 'MainLoader',
  components: {
    Balls
  },
  props: {
    isShow: {
      type: Boolean,
      required: true
    }
  },
  setup () {
    return useController()
  }
})
</script>
