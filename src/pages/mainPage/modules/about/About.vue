<template>
  <section class="about">
    <div class="about__container container">
      <div class="about__header">
        <h3 class="about__sup-title sup-title">
          {{ lang.about.supTitle }}
        </h3>
        <h2 class="about__title title">
          {{ lang.about.title }}
        </h2>
      </div>
      <div class="about__body">
        <div class="about__descriptions-list">
          <p
            v-for="(item, index) in lang.about.descriptions"
            :key="index"
            class="about__description"
          >
            {{ item }}
          </p>
        </div>
      </div>
      <div class="about__buttons">
        <PrimaryButton href="#">
          {{ lang.about.button }}
        </PrimaryButton>
        <PrimaryButton
          href="#"
          bordered
        >
          <template #icon>
            <svg
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.4987 14.8966C12.1806 14.8966 15.1654 11.9118 15.1654 8.2299C15.1654 4.548 12.1806 1.56323 8.4987 1.56323C4.8168 1.56323 1.83203 4.548 1.83203 8.2299C1.83203 11.9118 4.8168 14.8966 8.4987 14.8966Z"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.16797 5.56323L11.168 8.2299L7.16797 10.8966V5.56323Z"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </template>
          About Us
        </PrimaryButton>
      </div>
      <div class="about__image-block">
        <AboutImageBlock />
      </div>
    </div>
  </section>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { useLang } from 'src/hooks/useLang'
import './style.scss'
import PrimaryButton from 'components/primaryButton/PrimaryButton.vue'
import AboutImageBlock from 'pages/mainPage/modules/about/components/aboutImageBlock/AboutImageBlock.vue'
export default defineComponent({
  name: 'About',
  components: { AboutImageBlock, PrimaryButton },
  setup () {
    const lang = useLang()
    return { lang }
  }
})
</script>
