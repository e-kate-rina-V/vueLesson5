<!--Реалізуйте компонент лічильника, який використовує v-model для управління його значенням. 
Компонент повинен мати кнопки для збільшення та зменшення значення лічильника.-->

<template>
  <div>
    <button @click="decrement">-</button>
    <span>{{ count }}</span>
    <button @click="increment">+</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  props: {
    modelValue: {
      type: Number,
      default: 0
    }
  },
  computed: {
    count() {
      return this.modelValue;
    }
  },
  methods: {
    increment() {
      this.$emit('update:modelValue', this.count + 1);
    },
    decrement() {
      this.$emit('update:modelValue', this.count - 1);
    }
  }
};
</script>