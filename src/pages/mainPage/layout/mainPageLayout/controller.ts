import { onMounted, ref } from 'vue'

export const useController = () => {
  const intersectionContainerRef = ref<HTMLElement | null>(null)
  const HIDE_CLASS = '_hide'
  const options: IntersectionObserverInit = {
    root: intersectionContainerRef.value,
    rootMargin: '-150px 0px'
  }
  const observerCallback: IntersectionObserverCallback = (entries) => {
    for (let i = 0; i < entries.length; i++) {
      const target = entries[i].target
      if (entries[i].isIntersecting) {
        target.classList.remove(HIDE_CLASS)
      } else {
        target.classList.add(HIDE_CLASS)
      }
    }
  }
  const observer = new IntersectionObserver(observerCallback, options)

  onMounted(() => {
    if (intersectionContainerRef.value) {
      const intersectionChildren = intersectionContainerRef.value.children
      for (let i = 0; i < intersectionChildren.length; i++) {
        observer.observe(intersectionChildren[i])
      }
    }
  })
  return {
    intersectionContainerRef
  }
}
