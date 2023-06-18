<template>
  <div class="logo">
    <img
      src="../../assets/icons/mainLogo.svg"
      alt="main logo"
      class="logo__icon"
    >
    <div class="logo__body">
      <h4 class="logo__title">
        Agency
      </h4>
      <h5 class="logo__sub-title">
        Creative
      </h5>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import './style.scss'
export default defineComponent({
  name: 'Logo',
  setup () {
    return {}
  }
})
</script>
