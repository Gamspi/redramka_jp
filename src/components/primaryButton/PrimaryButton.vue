<template>
  <a
    v-if="href"
    :href="href"
    :class="['primary-button', {'primary-button--bordered': bordered}]"
  >
    <slot name="icon" />
    <span class="primary-button__label">
      <slot />
    </span>
  </a>
  <button
    v-else
    :class="['primary-button', {'primary-button--bordered': bordered}]"
  >
    <slot name="icon" />
    <span class="primary-button__label">
      <slot />
    </span>
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
    },
    href: {
      type: String,
      default: ''
    }
  },
  setup () {
    return {}
  }
})
</script>
