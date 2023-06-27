<template>
  <button
    class="burger"
  >
    <Transition name="burger-icon-transition">
      <svg
        v-if="!isActive"
        class="burger__icon-default"
        viewBox="0 0 30 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.0027 12.7014H10.0027"
          stroke-width="1.7"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25.0027 5.70142H7.00269"
          stroke-width="1.7"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25.0027 19.7014H7.00269"
          stroke-width="1.7"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Transition>
    <Transition name="burger-icon-transition">
      <svg
        v-if="isActive"
        class="burger__icon-close"
        viewBox="0 0 30 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.7279 18.7279L9 6"
          stroke-width="1.7"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.0001 18.7279L21.728 6"
          stroke-width="1.7"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
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
