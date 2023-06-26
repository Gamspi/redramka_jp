<template>
  <router-link
    :class="['logo', {'logo--footer': isFooter}]"
    :to="link"
  >
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
  </router-link>
</template>

<script>
import { defineComponent } from 'vue'
import './style.scss'

export default defineComponent({
  name: 'Logo',
  props: {
    link: {
      type: String,
      default: '/'
    },
    isFooter: {
      type: Boolean,
      default: false
    }
  }
})
</script>
