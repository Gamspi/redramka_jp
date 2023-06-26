<template>
  <button
    class="burger"
  >
    <Transition name="burger-icon-transition">
      <img
        v-if="!isActive"
        src="../../../../assets/icons/burger.svg"
        alt="burger"
        class="burger__icon-default"
      >
    </Transition>
    <Transition name="burger-icon-transition">
      <img
        v-if="isActive"
        src="../../../../assets/icons/close.svg"
        alt="burger"
        class="burger__icon-close"
      >
    </Transition>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import './style.scss'

export default defineComponent({
  name: 'Burger',
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  }
})
</script>
