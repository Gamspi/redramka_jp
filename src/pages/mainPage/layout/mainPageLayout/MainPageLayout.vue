<template>
  <main
    class="main-page"
  >
    <ContactUsPopup />
    <Balls />
    <div
      ref="intersectionContainerRef"
      class="main-page__container"
    >
      <MainBlock />
      <About />
      <OurServices />
      <Portfolio />
      <Testimonial />
      <Collaboration />
    </div>
  </main>
</template>

<script>
import { defineComponent } from 'vue'
import { useController } from './controller'
import MainBlock from 'pages/mainPage/modules/mainBlock/MainBlock.vue'
import './style.scss'
import About from 'pages/mainPage/modules/about/About.vue'
import OurServices from 'pages/mainPage/modules/ourServices/OurServices.vue'
import Portfolio from 'pages/mainPage/modules/portfolio/Portfolio.vue'
import Testimonial from 'pages/mainPage/modules/testimonial/Testimonial.vue'
import Collaboration from 'pages/mainPage/modules/сollaboration/Collaboration.vue'
import ContactUsPopup from 'src/modules/contactUsPopup/ContactUsPopup.vue'
import Balls from 'components/balls/Balls.vue'

export default defineComponent(
  {
    name: 'MainPageLayout',
    components: {
      Balls,
      ContactUsPopup,
      Collaboration,
      Testimonial,
      Portfolio,
      OurServices,
      About,
      MainBlock
    },
    setup () {
      return useController()
    }
  }
)
</script>
