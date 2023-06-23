import { computed, onMounted, ref } from 'vue'
import { useStore } from 'src/store'
import { useSwiper } from 'src/hooks/useSwiper'

export const useController = () => {
  const store = useStore()
  const reviews = computed(() => store.state.testimonial.list)
  const local = computed(() => store.state.general.lang)
  const { swiperRef } = useSwiper()
  return {
    local,
    swiperRef,
    reviews
  }
}
