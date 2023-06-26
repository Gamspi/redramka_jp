import { Ref, watch } from 'vue'

/**
 *  Блокировка скролла у тега body
 * @param isBlockRef - булевое значение при котором будет триггериться
 * @param name - дополнительный класс, необходим, что бы изолировать несколько блокировок друг от друга
 */
export const useBlockBody = (isBlockRef: Ref<boolean>, name: string) => {
  const className = 'block-mobile' + name
  watch(isBlockRef, (value) => {
    if (value) {
      document.body.classList.add(className)
    } else {
      document.body.classList.remove(className)
    }
  })
}
