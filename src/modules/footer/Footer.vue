<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__logo">
        <Logo is-footer />
      </div>
      <div class="footer__menu">
        <FooterMenuItem
          v-for="item in footerMenu"
          :key="item.title"
          :item="item"
        />
      </div>
      <div class="footer__social">
        <Social :list="socialList" />
      </div>
    </div>
    <div class="footer__copyright">
      {{ lang.footer.copy }}
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import './style.scss'
import Logo from 'components/logo/Logo.vue'
import FooterMenuItem from 'src/modules/footer/components/footerMenuItem/FooterMenuItem.vue'
import { footerMenu } from 'src/modules/footer/constants/footerMenu'
import Social from 'components/social/Social.vue'
import { socialList } from 'src/constants/socialList'
import { useLang } from 'src/hooks/useLang'

export default defineComponent({
  name: 'Footer',
  components: {
    Social,
    FooterMenuItem,
    Logo
  },
  setup () {
    const lang = useLang()
    return {
      lang,
      socialList,
      footerMenu
    }
  }
}
)
</script>
