<template>
  <div
    :class="['custom-input', {
      'custom-input--fill': modelValue || defaultValue,
      'custom-input--error': isError,
    }]"
  >
    <div class="custom-input__body">
      <input
        :id="inputId"
        :type="type"
        :value="modelValue || defaultValue"
        class="custom-input__value"
        @input="handelChangeModelValue"
      >
      <label
        v-if="placeholder"
        :for="inputId"
        class="custom-input__label"
      >
        {{ placeholder }}
      </label>
    </div>
    <transition name="fabe-height">
      <span
        v-if="errorMessage && isError"
        class="custom-input__error"
      > {{ errorMessage }}</span>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, InputHTMLAttributes } from 'vue'
import { useController } from './controller'
import './style.scss'

export default defineComponent({
  name: 'CustomInput',
  props: {
    type: {
      type: String as PropType<InputHTMLAttributes['type']>,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    modelValue: {
      type: String,
      default: ''
    },
    errorMessage: {
      type: String,
      default: ''
    },
    isError: {
      type: Boolean,
      default: false
    }
  },
  setup (_, { emit }) {
    return useController({ emit })
  }
})
</script>
