<template>
  <header class="header">
    <div class="header__container">
      <router-link
        class="header__logo"
        to="/"
      >
        <Logo />
      </router-link>
      <div class="header__burger">
        <Burger />
      </div>
    </div>
  </header>
</template>

<script>
import { defineComponent } from 'vue'
import Logo from 'components/logo/Logo.vue'
import Burger from 'src/modules/header/components/burger/Burger.vue'
import './style.scss'

export default defineComponent({
  name: 'HeaderLayout',
  components: {
    Burger,
    Logo
  },
  setup () {
    return {}
  }
})
</script>
