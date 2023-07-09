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
  <router-link
    v-else-if="to"
    :to="href"
    :class="['primary-button', {'primary-button--bordered': bordered}]"
  >
    <slot name="icon" />
    <span class="primary-button__label">
      <slot />
    </span>
  </router-link>

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

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import './style.scss'
import { RouterLinkProps } from 'vue-router'

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
    },
    to: {
      type: [String, Object] as PropType<RouterLinkProps['to']>,
      default: ''
    }
  },
  setup () {
    return {}
  }
})
</script>
