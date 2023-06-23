import { onMounted, ref, watch } from 'vue'

export const useSwiper = () => {
  const swiperRef = ref<HTMLElement | null>(null)
  const position = ref(0)
  const startPosition = ref(0)
  const childrenCount = ref(0)
  const containerWidth = ref(0)

  const handelTouchEnd = () => {
    if (swiperRef.value) {
      const childrenCount = swiperRef.value.childElementCount
      const slideWidth = (swiperRef.value.scrollWidth / childrenCount)
      const activeSlide = Math.round(position.value / slideWidth)
      if (activeSlide > 0) {
        position.value = 0
      } else if (Math.abs(activeSlide) + 1 > childrenCount) {
        position.value = -(childrenCount - 1) * slideWidth
      } else {
        position.value = activeSlide * slideWidth
      }

      swiperRef.value.style.transition = 'transform .15s linear'
    }
  }
  const handelTouchStart = (e: TouchEvent) => {
    for (let i = 0; i < e.touches.length; i++) {
      if (swiperRef.value) swiperRef.value.style.transition = ''
      startPosition.value = e.touches[i].clientX
    }
  }
  const handelTouchMove = (e: TouchEvent) => {
    for (let i = 0; i < e.touches.length; i++) {
      position.value += e.touches[i].clientX - startPosition.value
      startPosition.value = e.touches[i].clientX
    }
  }
  watch(position, (value) => {
    if (swiperRef.value) {
      swiperRef.value.style.transform = `translate3d(${value}px, 0, 0)`
    }
  })
  onMounted(() => {
    if (swiperRef.value) {
      childrenCount.value = swiperRef.value.childElementCount
      containerWidth.value = swiperRef.value.scrollWidth
      swiperRef.value.style.display = 'flex'
      swiperRef.value.addEventListener('touchend', handelTouchEnd)
      swiperRef.value.addEventListener('touchstart', handelTouchStart)
      swiperRef.value.addEventListener('touchmove', handelTouchMove)
    }
  })
  return {
    swiperRef
  }
}
