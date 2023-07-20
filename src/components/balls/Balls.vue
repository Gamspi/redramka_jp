<template>
  <aside class="balls">
    <div class="balls__container container">
      <div class="balls__item">
        <Ball
          color="blue"
          is-animated
          animation-number="1"
        />
      </div>
      <div class="balls__item">
        <Ball
          color="blue"
          is-animated
          animation-number="2"
        />
      </div>
      <div class="balls__item">
        <Ball
          is-animated
          animation-number="3"
        />
      </div>
      <div class="balls__item">
        <Ball
          is-animated
          animation-number="4"
        />
      </div>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Ball from 'components/ball/Ball.vue'
import './style.scss'

export default defineComponent({
  name: 'Balls',
  components: { Ball },
  setup () {
    return {}
  }
})
</script>
