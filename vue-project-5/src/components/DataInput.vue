<!--Реалізуйте компонент, який використовує v-model для налаштування власного введення даних.-->

<template>
  <div>
    <label for="input">{{ label }}</label>
    <input :type="type" :id="id" :placeholder="placeholder" v-model="internalValue" @input="updateValue" />
  </div>
</template>

<script>
export default {
  name: 'DataInput',
  props: {
    modelValue: [String, Number],
    label: String,
    type: {
      type: String,
      default: 'text'
    },
    id: String,
    placeholder: String
  },
  data() {
    return {
      internalValue: this.modelValue
    };
  },
  methods: {
    updateValue() {
      this.$emit('update:modelValue', this.internalValue);
    }
  },
  watch: {
    modelValue(newValue) {
      this.internalValue = newValue;
    }
  }
};
</script>