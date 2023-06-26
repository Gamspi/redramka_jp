<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <Logo />
      </div>
      <div class="header__burger">
        <Burger
          :is-active="isShowMobileMenu"
          @click="handelBurger"
        />
      </div>
    </div>
    <div class="header__mobile-menu">
      <MobileMenu
        :is-show="isShowMobileMenu"
        @close="handelBurger"
      />
    </div>
  </header>
</template>

<script>
import { defineComponent } from 'vue'
import Logo from 'components/logo/Logo.vue'
import Burger from 'src/modules/header/components/burger/Burger.vue'
import './style.scss'
import MobileMenu from 'src/modules/header/components/mobileMenu/MobileMenu.vue'
import { useController } from './controller'

export default defineComponent({
  name: 'HeaderLayout',
  components: {
    MobileMenu,
    Burger,
    Logo
  },
  setup () {
    return useController()
  }
})
</script>
