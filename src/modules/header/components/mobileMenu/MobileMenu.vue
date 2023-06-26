<template>
  <Transition name="mobile-menu-transition">
    <aside
      v-if="isShow"
      class="mobile-menu"
    >
      <div class="mobile-menu__container container">
        <nav class="mobile-menu__nav">
          <ul class="mobile-menu__list">
            <li
              v-for="(item, index) in navMenu"
              :key="item.link + index"
              class="mobile-menu__item"
            >
              <router-link
                :to="item.link"
                active-class="_active"
              >
                {{ item.label }}
              </router-link>
            </li>
          </ul>
        </nav>
        <div class="mobile-menu__lang">
          <button
            v-for="item in LangEnum"
            :key="item"
            :class="['mobile-menu__button-lang', {'_active': currentLang === item}]"
            @click="()=>handelChangeLang(item)"
          >
            {{ item }}
          </button>
        </div>
        <div class="mobile-menu__contact-us">
          <PrimaryButton
            bordered
            @click="handelShowContactUsPopup"
          >
            Contact us
          </PrimaryButton>
        </div>
        <div class="mobile-menu__social">
          <Social :list="socialList" />
        </div>
      </div>
    </aside>
  </Transition>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { navMenu } from './constants/navMenu'
import './style.scss'
import { LangEnum } from 'src/utils/enum/langEnum'
import { useController } from './controller'
import PrimaryButton from 'components/primaryButton/PrimaryButton.vue'
import Social from 'components/social/Social.vue'
import { socialList } from 'src/constants/socialList'

export default defineComponent({
  name: 'MobileMenu',
  components: { Social, PrimaryButton },
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  setup (_, { emit }) {
    const controller = useController({ emit })
    return {
      navMenu,
      LangEnum,
      socialList,
      ...controller
    }
  }
})
</script>
