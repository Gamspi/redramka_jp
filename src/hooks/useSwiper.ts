import { onMounted, onUnmounted, ref, watch } from 'vue'

type SwiperOptions = {
  spaceBetween?: number
}
export const useSwiper = () => {
  const swiperRef = ref<HTMLElement | null>(null)
  const position = ref(0)
  const startPosition = ref(0)
  const childrenCount = ref(0)
  const containerWidth = ref(0)

  const handelSwipeEnd = () => {
    if (swiperRef.value) {
      const childrenCount = swiperRef.value.childElementCount
      const slideWidth = swiperRef.value.scrollWidth / childrenCount
      const showCountSlides = swiperRef.value.clientWidth / slideWidth
      const activeSlide = Math.round(position.value / (slideWidth))
      if (activeSlide > 0) {
        position.value = 0
      } else if (Math.abs(activeSlide) + showCountSlides > childrenCount) {
        position.value = -(childrenCount - showCountSlides) * (slideWidth)
      } else {
        position.value = activeSlide * slideWidth
      }
      swiperRef.value.style.transition = 'transform .15s linear'
      swiperRef.value.removeEventListener('touchmove', handelSwipeMove)
      swiperRef.value.removeEventListener('mousemove', handelSwipeMove)
      swiperRef.value.removeEventListener('touchend', handelSwipeEnd)
      document.removeEventListener('mouseup', handelSwipeEnd)
    }
  }
  const handelSwipeStart = (e: TouchEvent | MouseEvent) => {
    if (swiperRef.value) {
      swiperRef.value.addEventListener('touchmove', handelSwipeMove)
      swiperRef.value.addEventListener('mousemove', handelSwipeMove)
      swiperRef.value.addEventListener('touchend', handelSwipeEnd)
      document.addEventListener('mouseup', handelSwipeEnd)
    }
    if ('touches' in e) {
      for (let i = 0; i < e.touches.length; i++) {
        if (swiperRef.value) swiperRef.value.style.transition = ''
        startPosition.value = e.touches[i].clientX
      }
    } else {
      if (swiperRef.value) swiperRef.value.style.transition = ''
      startPosition.value = e.clientX
    }
  }
  const handelSwipeMove = (e: TouchEvent | MouseEvent) => {
    if ('touches' in e) {
      for (let i = 0; i < e.touches.length; i++) {
        position.value += e.touches[i].clientX - startPosition.value
        startPosition.value = e.touches[i].clientX
      }
    } else {
      position.value += e.clientX - startPosition.value
      startPosition.value = e.clientX
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
      swiperRef.value.addEventListener('touchstart', handelSwipeStart)
      swiperRef.value.addEventListener('mousedown', handelSwipeStart)
      const observer = new ResizeObserver(handelSwipeEnd)
      observer.observe(swiperRef.value)
    }
  })
  onUnmounted(() => {
    if (swiperRef.value) {
      swiperRef.value.removeEventListener('touchstart', handelSwipeStart)
      swiperRef.value.removeEventListener('mousedown', handelSwipeStart)
    }
  })
  return {
    swiperRef
  }
}
