<template>
  <button :class="['primary-button', {'primary-button--bordered': bordered}]">
    <slot />
  </button>
</template>

<script>
import { defineComponent } from 'vue'
import './style.scss'

export default defineComponent({
  name: 'PrimaryButton',
  props: {
    bordered: {
      type: Boolean,
      default: false
    }
  },
  setup () {
    return {}
  }
})
</script>
