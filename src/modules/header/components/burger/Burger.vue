<template>
  <button class="burger">
    <img
      src="../../../../assets/icons/burger.svg"
      alt="burger"
      class="burger__icon-default"
    >
    <img
      src="../../../../assets/icons/close.svg"
      alt="burger"
      class="burger__icon-close"
    >
  </button>
</template>

<script>
import { defineComponent } from 'vue'
import './style.scss'
export default defineComponent({
  name: 'Burger',
  setup () {
    return {}
  }
})
</script>
