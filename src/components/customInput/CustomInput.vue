<template>
  <div
    :class="['custom-input', {
      'custom-input--fill': modelValue || defaultValue,
      'custom-input--error': isError,
      'custom-input--text-area': isArea,
      '_focus': isFocused,
    }]"
  >
    <label class="custom-input__body">
      <input
        v-if="!isArea"
        :type="type"
        :value="modelValue || defaultValue"
        class="custom-input__value"
        @input="handelChangeModelValue"
        @focus="handelFocus"
        @blur="handelBlur"
      >
      <textarea
        v-else
        :value="modelValue || defaultValue"
        class="custom-input__value"
        @input="handelChangeModelValue"
      />
      <span
        v-if="placeholder"
        class="custom-input__label"
      >
        {{ placeholder }}
      </span>
    </label>
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
    },
    isArea: {
      type: Boolean,
      default: false
    }
  },
  setup (_, { emit }) {
    return useController({ emit })
  }
})
</script>
