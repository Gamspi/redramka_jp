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
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import MainBlock from 'pages/mainPage/modules/mainBlock/MainBlock.vue'
import Ball from 'components/ball/Ball.vue'
import './style.scss'
import About from 'pages/mainPage/modules/about/About.vue'

export default defineComponent(
  {
    name: 'MainPageLayout',
    components: { About, Ball, MainBlock },
    setup () {
      return {}
    }
  }
)
</script>
