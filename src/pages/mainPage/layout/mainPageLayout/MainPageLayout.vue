<template>
  <div class="main-page">
    <div class="main-page__balls">
      <div class="main-page__ball">
        <Ball
          color="blue"
          is-animated
          animation-number="1"
        />
      </div>
      <div class="main-page__ball">
        <Ball
          color="blue"
          is-animated
          animation-number="2"
        />
      </div>
      <div class="main-page__ball">
        <Ball
          is-animated
          animation-number="3"
        />
      </div>
      <div class="main-page__ball">
        <Ball
          is-animated
          animation-number="4"
        />
      </div>
    </div>
    <MainBlock />
    <About />
    <OurServices />
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import MainBlock from 'pages/mainPage/modules/mainBlock/MainBlock.vue'
import Ball from 'components/ball/Ball.vue'
import './style.scss'
import About from 'pages/mainPage/modules/about/About.vue'
import OurServices from 'pages/mainPage/modules/ourServices/OurServices.vue'

export default defineComponent(
  {
    name: 'MainPageLayout',
    components: {
      OurServices,
      About,
      Ball,
      MainBlock
    },
    setup () {
      const refi = ref(false)
      onMounted(() => {
        setTimeout(() => {
          refi.value = true
        }, 2000)
      })
      return {
        refi
      }
    }
  }
)
</script>
